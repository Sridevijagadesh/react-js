import React,{ useEffect, useState, useLayoutEffect } from "react"

const Timer = (props)=>{
 const{counter}=props

  const [showTime , updatestate]=useState(0)
useEffect(()=>{
  let interval =  setInterval(()=>{
    
    updatestate((prevState)=> prevState+1)
  
    },1000)
    return ()=>{
      console.log(' i was mounted', {interval})
      clearInterval(interval)
    }
   
},[])
useEffect (()=>{
  return ()=>{
    console.log('cleaning up 2nd effect for cuhhj')
  }
},[counter])
return <>
<div>{counter}</div>
<span >the count is :{showTime}</span>
</>
}


export default Timer;