import MenuItem from "./menu-item"

export default function MenuList({list}){
  return(
      <div className="flex justify-center">
          <ul style={{listStyleType: "bullet"}}>
          {
            list && list.length>0 ?list.map((listItem)=>(
              <MenuItem items={listItem}/>
            ))
            :null
          }
        </ul> 
      </div> 
  )
}