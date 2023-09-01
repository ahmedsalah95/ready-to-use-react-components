import { useState } from "react";
import Panel from "./Panel";
function Dropdown({items,option,setColor}){
    const [isOpen,ChangeIsOpen] = useState(false);
    //const [color,setColor] = useState('');

    const changedropDownState=()=>{
        ChangeIsOpen(!isOpen);
    };

    const chooseColor=(color)=>{
        setColor(color);
        ChangeIsOpen(false);
    };

    let content = 'select...';
    if(option){
        console.log(option);
        content = option;
    } 
    const renderedItems = items.map((item)=>{
        return(
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
          onClick={()=>chooseColor(item.val)}   key={item.val} > 
        {item.label}
        </div>
        ) 
    });

   

    return(
        <div className="w-48 relative">
        <Panel  className="flex justify-between items-center cursor-pointer"
         onClick={()=>changedropDownState()} >{content}
         </Panel>
        {isOpen &&  <Panel className="absolute top-full">{renderedItems}</Panel>}
        </div>
        
    );

}

export default Dropdown;