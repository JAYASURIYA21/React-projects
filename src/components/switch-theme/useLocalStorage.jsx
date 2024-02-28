import { useEffect, useState } from "react";

 export default function useLocalStorage(key,defaultValue){
    const [value,setvalue]=useState(()=>{
      let currentvalue
      try {
        currentvalue=JSON.parse(localStorage.getItem(key) || string(defaultValue))
      } catch (error) {
        console.log(error);
        currentvalue=defaultValue;
      }
      return currentvalue
    })

    useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(value))
      console.log("useEffect",value);
    },[value])
    return [value,setvalue]
 }