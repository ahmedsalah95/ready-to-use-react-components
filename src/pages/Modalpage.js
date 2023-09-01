import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage(){
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = ()=>{
        setIsOpen(true);
    }

    const handleClose=()=>{
        setIsOpen(false);
    }
    const acceptButton = <Button primary onClick={handleClose}>I accept</Button>
    const modal = <Modal onClose={handleClose} acceptButton={acceptButton}>this is modal message</Modal>;
    return(
        <div className="relative">
        <Button onClick={handleClick} secondary>open modal</Button>
       {isOpen && modal} 
        </div> 
    );


}

export default ModalPage;