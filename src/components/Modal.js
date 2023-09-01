import ReactDOM from 'react-dom';

function Modal({children,onClose,acceptButton}){

    return ReactDOM.createPortal(
    <div>
     <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
     <div className="absolute inset-40 p-10 bg-white">
        <div className='flex fle-col justify-between h-full'>
        {children}
        <div className='flex justify-end'>
        {acceptButton}
        </div>
        
        </div>
       
     </div>
    </div>,
    document.querySelector('.modal-container')

    );
}

export default Modal;