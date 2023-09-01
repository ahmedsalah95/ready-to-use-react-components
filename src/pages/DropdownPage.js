import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage(){

    const items =[
        {'label':"red",
          'val':"red"
        },
        {'label':"green",
        'val':"green"
        },
       {'label':"blue",
          'val':"blue"
        }
      ];

    const [option,setOption] = useState('');

    const setColor= (option)=>{
        console.log(option);

        setOption(option);
    };

    return(
        <Dropdown  items={items} option={option} setColor={setColor}/>

    );
}

export default DropdownPage;