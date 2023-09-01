import { useContext } from "react";
import navigationContext from '../context/navigation';
import classNames from "classnames";
function Link({to,children}){

const {navigate} = useContext(navigationContext);

const styles = classNames('text-blue-500');
const handleClick=(event)=>{
    event.preventDefault();
    navigate(to);
}
    return(
        <a className={styles} href={to} onClick={handleClick}>{children}</a>
    );
}

export default Link;