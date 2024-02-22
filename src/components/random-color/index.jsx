import { useState } from "react"


export default function RandomColor(){
   const [typeOfColor,setTypeOfColor]=useState('hex')
   const [color,setColor]=useState('#000000')
   function generateHexColor(){
      const hexArr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
      let hex="#"
      for(let i=0;i<6;i++){
        hex+=hexArr[Math.floor(Math.random()*15)]
      }
      setColor(hex)
   }
   function generateRgbColor(){
      const r=Math.floor(Math.random()*256)
      const g=Math.floor(Math.random()*256)
      const b=Math.floor(Math.random()*256)
      setColor(`rgb(${r},${g},${b})`)
   }
   console.log(color)
   
    return(
      
      <div className="flex justify-center items-center" style={{backgroundColor:color,height : "100vh"}}>
        <div className="flex h-max items-center">
          <button onClick={()=>setTypeOfColor('hex')} className="border-2 bg-black text-white p-3 rounded-md mx-2">create hex color </button>
          <button onClick={()=>setTypeOfColor('rgb')}className="border-2 bg-black text-white p-3 rounded-md mx-2">create rgb color</button>
          <button onClick={typeOfColor==='hex'?generateHexColor:generateRgbColor} className="border-2 bg-black text-white p-3 rounded-md mx-2">Generate random color</button> 
        </div>
        <h1 className="text-black">{color}</h1>
      </div>
    )
}