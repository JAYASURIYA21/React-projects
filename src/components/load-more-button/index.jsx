import { useEffect, useState } from "react";
import './styles.css'


export default function LoadMoreItem(){
  const [loading,setLoading]=useState(false)
  const [products,setProducts]=useState([])
  const [count,setCount]=useState(0)
  const [loadbutton,setloadbutton]=useState(true)
  async function fetchData(){
      try{
        setLoading(true)
        const data=await fetch(`https://dummyjson.com/products?limit=10&skip=${count*20}`).then(res=>res.json())
        if(data){
          console.log(data);
          setProducts((prev)=>[...prev,...data.products])
          setLoading(false);
          console.log(products);
        }   
      }catch(e){
        console.log('error occured');
      }
  }
  useEffect(()=>{
    fetchData()
  },[count])
  useEffect(()=>{
    if(products.length===50) setloadbutton(false)
  },[products])
  return(
    <div className="load-more-container">
      {loading && <p>Loading...  please wait</p>}
      <div className="product-container">
          {
            products && products.length?
               products.map((item)=>(
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt="" />
                  <p>{item.title}</p>
                </div>
               ))
            :null
          }
      </div>
          <div className="load-button">
            {loadbutton && 
            <button onClick={()=>setCount(count+1)} className="load-more-button">load more</button>}
          </div>
    </div>
  )
}