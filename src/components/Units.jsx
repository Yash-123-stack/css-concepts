import React from 'react'
import './Units.css';
export default function Units() {
  return (
    <>
    <div className="units">In this we'll learn about  </div>
    <div className="parent">
        <h2 className ="child">This is my child container</h2>
        <div className="box1">Hi this is yash</div>
        <div class="wrapper"> this is em class
          <div className = "px">I am 200px wide</div>
          <div className = "vw">I am 10vw wide</div>
          <div className = "em">I am 10em wide</div>
          <p className ="firstPara">Hi there</p>
        </div>
    </div>
    </>
  )
}
