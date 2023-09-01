import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id:"sdad1",
      'label':"this is label",
      'content':"this is content of first item ,this is content of first item ,this is content of first item "
    },
    {
      id:"sascxz1",
      'label':"this is label",
      'content':"this is content of second item ,this is content of second item ,this is content of second item "
    }
    ,
    {
      id:"sascxz3",
      'label':"this is label",
      'content':"this is content of third item ,this is content of third item ,this is content of third item "
    }
  ];
 
  return (
    <>
      <Accordion items={items}></Accordion>  
    </>

  );
}

export default AccordionPage;
