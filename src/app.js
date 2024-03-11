import React, { useEffect, useState } from "react";
import Button from "./buuton";
import Text from "./Text";
import Timer from "./Timer";

const App = ()=>{

const [showTime , toogle]=useState(true)
return <>
{showTime && <Timer counter='this is good clock'/>}
<button onClick={()=>toogle(!showTime)}>count</button>
</>
}
export default App;
