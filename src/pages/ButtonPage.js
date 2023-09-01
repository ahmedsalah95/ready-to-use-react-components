import Button from "../components/Button";
import {GoBell} from 'react-icons/go';

function ButtonPage() {

  const clicked = ()=>{
    console.log("clicked");
  }

  return (
    <>
      <Button secondary rounded onClick={clicked}>
        <GoBell/>
        test</Button>
      <Button primary onClick={clicked}>hello</Button>
      
      
    </>

  );
}

export default ButtonPage;
