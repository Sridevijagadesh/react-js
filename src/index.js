import React from "react";
import ReactDOM from "react-dom";

const childer = React.createElement('p',{},'i am child')
const childer1 = React.createElement('p',{},'i am child')
const div = React.createElement('div',{},childer,childer1)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)