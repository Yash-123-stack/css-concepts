import React from 'react';
import './Floats.css';

export default function Floats() {
  return (
    <>
    <div className = "cards">
        <img src="apple-image.jpg" alt="" width= "230px"/>
        <div className = "card1">Card 1</div>
        <div className = "card2">Card 2</div>
        <div className = "card3">Card 3</div>
        {/* it was used in earlier times when we used to make contents like newspaper where we need to put an image on a particular side of the window and the text on the other side */}
        {/* float: right, this will place the image at the right side of the screen and the text on left side and vice versa */}
    </div>
    </>
  )
}
