import React ,{useRef, useState} from "react"
import ToolTip from "../ToolTip"
const ButtonWithTooltip = (props)=>{
  const [tragetPostion, setPostion] = useState(null) 
 const {children, tooltipContent} = props
 const buttonRef = useRef(null)
 const handleMouseEvent =()=>{
  const rect = buttonRef.current.getBoundingClientRect()
  console.log(rect)
  setPostion({
    left:rect.left,
    right:rect.right,
    top:rect.top,
    bottom:rect.bottom,
  })
 }
 return<>

<button 
ref={buttonRef}
onPointerEnter={handleMouseEvent}
onPointerLeave={()=>{
  setPostion(null)
}}
>
  {children}</button>
  {tragetPostion && <ToolTip postion={tragetPostion} >{tooltipContent}</ToolTip>}

</>
}

export default ButtonWithTooltip