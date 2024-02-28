import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({items}){
  const [displayCurrentChild,setDisplayCurrentChild]=useState({})
  function handleToggleChildren(currentLabel){
      setDisplayCurrentChild({
        [currentLabel]:!displayCurrentChild[currentLabel]
      })
  }
  return(
    <div>
    <li>
      <div style={{display:"flex", gap:"10px"}}>
        <p>{items.label}</p>
        {
          items && items.children && items.children.length? 
          <span onClick={()=>handleToggleChildren(items.label)}>{displayCurrentChild[items.label]?'-' : '+'}</span>
          :null
        }
      </div>
    </li>
      {
        items && items.children && items.children.length && displayCurrentChild[items.label]? 
        <MenuList list={items.children}/>
        :null
      }
   </div>
  )
}