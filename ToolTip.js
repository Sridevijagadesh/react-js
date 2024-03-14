import React, {  useLayoutEffect, useRef, useState } from "react"

import { createPortal  } from "react-dom"
const ToolTip= (props)=>{
console.log(props)
const {children , postion} = props
const {left, top,bottom} = postion
const tooltipRef = useRef(null)
const [tooltipHeight, setToolTipHeight] = useState(0)
console.log(tooltipHeight)
let x=0
let y=0
if(postion!==null){
  console.log(postion)
  x=left
  console.log( 'the height of x is :',x)
  y=top
  console.log('the height of y is ', y)
  y=top-tooltipHeight
  console.log('the height of tooltipHeight is ',tooltipHeight)
  console.log('the height of y is ', y)
if(y<0){
  y= bottom
}
}

useLayoutEffect(()=>{
  const {height} = tooltipRef.current.getBoundingClientRect()
setToolTipHeight(height)

},[])


  return createPortal(<div className="tooltip" ref={tooltipRef}  style={{
    position:'absolute',
    left:"0",
    top:'0',
    pointerEvents:'none',
    transform:`translate3d(${x}px ,${y}px,0)`
  }}>
    {children}
    </div>,document.body)
  
  
}
 export default ToolTip