import React from 'react'
import '../styles/App.css';
import React, { useState } from "react";
const App = () => {
  
  let [data, SetData]=useState({text:"",num:""})

  const handleInput = (e) =>{
   // use console.log
    {
       Setdata({
      ...data,
      [e.target.name]:e.target.value
    })
  };
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input name="text" id="text-input" type={'text'} onChange={handleInput}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input name="num" id="num-input" onClick={handleInput} type={'number'} />
      <br/>
    </div>
  )
}


export default App;
