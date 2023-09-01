import { useState } from "react";
import {GoChevronDown,GoChevronLeft} from 'react-icons/go';


function Accordion({items}){
   const  [expandedIndex,changeExpandedIndex] = useState(0);

   const handleChange =(index)=>{
    changeExpandedIndex(index);
   }
    const renderedItems = items.map((item,index)=>{

    const isExpanded = index ===expandedIndex;
    
    const icon =isExpanded ? <GoChevronDown/>: <GoChevronLeft/> ;

        return( <div key={item.id}>
            <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>{handleChange(index)}}>  {icon} {item.label}</div>
                {isExpanded && <p>{item.content}</p>}
        </div>);
    });

    return(
        <>{renderedItems}</>  
    );
}

export default Accordion;