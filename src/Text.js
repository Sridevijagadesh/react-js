import React from "react";

const Text = (props)=>{
  console.log(props)
  const {children} = props
  return<div>{children}</div>
}
export default Text