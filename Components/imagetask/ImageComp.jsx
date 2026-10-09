import "./ImageComp.css";
import { useState } from "react";

export function ImageComp(){
    let[url,setUrl]=useState("https://m.media-amazon.com/images/I/61wiQScR1vL.jpg"
    );

    const changeToSanju = ()=>{
        setUrl(
     "https://pbs.twimg.com/media/G5cfOkfaQAAoQKj.jpg"
        );
    };

    const changeToDhoni = ()=>{
        setUrl(
"https://m.media-amazon.com/images/I/61wiQScR1vL.jpg"
        );
    };

    return (
        <div className="image-comp">
          <h2>Image Switcher</h2>
          <img src={url} alt="Framework Logo" width="500" />
          <br />
          <button onClick={changeToDhoni}>Dhoni</button>
          
          <button onClick={changeToSanju}>Sanju</button>
        </div>
    );
}