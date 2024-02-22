import { useState } from "react"
import data from "./data"
export default function Accordian(){
    const [selectId,setSelectId]=useState(null)
    const [enableMultiSelection,setEnableMultiSelection]=useState(false)
    const [multilpe,setMultiple]=useState([])
  function handleSingleSelection(id){
     selectId==id?setSelectId(null):setSelectId(id)
  }

  function handleMultiSelection(id){
        let dup=[...multilpe]
        const ind=dup.indexOf(id)
        if(ind===-1) dup.push(id)
        else dup.splice(ind,1)
        setMultiple(dup)
  }
   return(
    <div>
      <div className="flex justify-center mt-5">
        <button className="text-white font-semibold  rounded-lg bg-red-600 py-3 px-3" onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection? "Enable single selection" : "Enable multi selection"}</button>
      </div>
      <div className=" flex justify-center my-4">   
          <div>
            { data && data.length>0 ?
              data.map((data)=>{
                return(<div className="bg-gray-500 text-white w-[500px] px-6 py-4 my-4">
                      <div  onClick={()=>enableMultiSelection?handleMultiSelection(data.id): handleSingleSelection(data.id)} className="title flex cursor-pointer">
                        <h3 className="my-2 w-full font-bold">{data.question} </h3>
                        <h3   className="text-xl cursor-pointer">+</h3>
                      </div>
                      {
                          multilpe.indexOf(data.id)!=-1 || selectId==data.id?<p>{data.answer}</p>:null
                        }           
                  </div>)
              }): 
              <p>there is no data</p>}
          </div>
      </div>
    </div>
   )
}