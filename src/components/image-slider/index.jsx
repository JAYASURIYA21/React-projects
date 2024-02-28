import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

export default function ImageSlider({url,limit,page}){
  const [image,setImage]=useState([])
  const [currSlide,setCurrSlide]=useState(0)
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
  async function fetchImages(){
    setLoading(true)
    try{
      const data = await fetch(`${url}?page=${page}&limit=${limit}`).then(urlData=>urlData.json())
      if(data){
        setImage(data)
        setLoading(false)
      }
    }catch(e){
      setError(<p>something went wrong {e.message}</p>)
    }
  }

  function handlePrevious(){
    setCurrSlide(currSlide===0?image.length-1: currSlide-1)
  }
  function handleNext(){
    setCurrSlide(currSlide===image.length-1? 0 : currSlide+1)
  }

  console.log(image)

  useEffect(()=>{
      if(url!=='') fetchImages(url)
      else setError(<p>url not found</p>)
  },[])
  return(
    <div className='container'>
        {loading && <p>fetching data...</p>}
        {error && <p> {error}</p>}
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow left-arrow"/>
        {
          image && image.length>0?
            image.map((imageItem,index)=>{
            return( <img className={currSlide===index ?"curr-image":"hide-image"}
              key={imageItem.id}
              src={imageItem.download_url}
              />
              )
            })
          :null 
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow right-arrow"/>
        <span className="circle-indicator">
              {(image && image.length)?
              image.map((_,index)=>
              (<button onClick={()=>setCurrSlide(index)} className={index===currSlide? "current-indicator ":"current-indicator inactive"}></button>)) 
              :null}
        </span>
    </div>
    
  )
}