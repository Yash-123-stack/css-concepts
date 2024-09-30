import React from 'react';
import './Important.css';

export default function Important() {
  return (
    <>
     <div>Important
      {/* In CSS we have already defined priority for some of the elements which we get by default  */}
     {/* for example for styling the priority is like this inline-styling > id > class > internal > external so if we declare any attribute as important then it will have the most priority  */}
     <h1 className = "important">power of important declaration</h1>
     </div>
    </>
  )
}
