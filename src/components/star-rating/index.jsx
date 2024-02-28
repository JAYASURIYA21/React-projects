import { useState } from "react"
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function StarRating(){
  const [rating,setRating]=useState(0)
  const [hover,setHover]=useState(0)
  let noOfStars=10
  function handleOnClick(index){
    if(index==1 && rating==1) setRating(0)
    else setRating(index)
  }
  function handleMouseMove(index){
    setHover(index)
  }
  function handleMouseLeave(){
    setHover(rating)
  }

  return(
    <div className="flex justify-center justify-items-center">
       <div className="flex">
       { [...Array(noOfStars)].map((_,index)=>{  
            index+=1      
            return <FaStar className={index <= hover?'active':'inactive'}
            key={index}
            onClick={()=>handleOnClick(index)}
            onMouseMove={()=>handleMouseMove(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
            />
        })}
       </div>
    </div>
  )
}