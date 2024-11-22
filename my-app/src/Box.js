//BoxComponent / Box should be clickable / Each click produces one box beneath

import React from 'react';
import './Box.css'
const Box = () => {
    const handleClick = () => {
        var div = document.createElement("div");
        div.style.width = "300px";
        div.style.border = "12px solid black";
        div.style.padding = "50px";
        div.style.margin = "20px";
        //Method 2 
        //Instead of above line 11 only is enoughto create child boxes.
        //div.setAttribute('class', 'outerdiv');
        document.body.appendChild(div);
    }
return(
    <>
    <div className ='outerdiv' onClick={handleClick}>Click Me</div>
    </>
)
}
export default Box;