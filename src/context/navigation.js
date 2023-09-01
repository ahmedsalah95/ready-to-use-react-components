
import { createContext, useEffect, useState } from "react";

const navigationContext = createContext();

const NavigationProvider = ({children})=>{
    const [currentPath,setCurrentpath]=useState(window.location.pathname);

    useEffect(()=>{
        const handler = ()=>{
            setCurrentpath(window.location.pathname);
        }

        window.addEventListener('popstate',handler);

        return()=>{
            window.removeEventListener('popstate',handler);
        };
    },[]);

    const navigate = (to) =>{
        window.history.pushState({},'',to);
        setCurrentpath(to);
    }

    return(
        <navigationContext.Provider value={{currentPath,navigate}}>
        {children}
    </navigationContext.Provider>
    );
    
}

export { NavigationProvider};
export default navigationContext;