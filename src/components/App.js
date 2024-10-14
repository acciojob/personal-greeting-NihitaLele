
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {
 
  const[text, setText] = useState()
  // console.log(text)
  return (
    <div>

      <form>

      <label htmlFor = "ip">Enter your name:</label><br />

      <input id="ip" type = "text" onChange = {(e)=>{
        setText(e.target.value)
      }}></input>

    <p>{text && `Hello ${text}!`}</p>
      
      </form>

    </div>
  )
}

export default App
