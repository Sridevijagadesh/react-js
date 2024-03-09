import React from "react";
import Button from "./buuton";

const App = ()=>{
  const handleclickAction = ()=>{
    console.log('i ckicked inside the parent class')
  }
  return <Button  data= {{a:{b: {c:'a'}}}}clickAction = {handleclickAction}>click me </Button>
  
}
export default App;
