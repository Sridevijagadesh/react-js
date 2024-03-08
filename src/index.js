import React from "react";
import ReactDOM from "react-dom/client";

// // const childer = React.createElement('p',{},'i am child')
// // const childer1 = React.createElement('p',{},'i am child')
// // const div = React.createElement('div',{},childer,childer1)

// const ismorning = true
// const morningText  = `good morning user`
// const afternoonText = `good afternoon user`
// const morning = <div onClick={handlestate(ismorning)}>morningText </div>
// const div =  ismorning?morningText:afternoonText
// function handlestate(state){
//   console.log('he' , state)
// }
// const GreetingComponent = ()=><>
// {div}
// i am inside a component
// </>

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(morning)
// // root.render(<GreetingComponent/>

const button = <button >add</button>
let i = 0
const Add =()=>{
i = i+1
console.log(i)
}
root.render(<Add/>)
