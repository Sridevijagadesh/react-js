import React from "react";


const Button = (props)=>{
  console.log(props)
  const {children , clickAction, data} = props
  console.log(children , clickAction    )
 const handleClick = ()=>{
  console.log('hi')
  clickAction?.()

 }
  return <button onClick={handleClick}>
    {children}
    +
    {data.a.b.c} </button>
  }
export default Button