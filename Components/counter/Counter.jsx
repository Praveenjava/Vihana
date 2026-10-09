import { useState } from "react";
import "./Counter.css";

 function Counter(){
     var [state,setState] = useState(0);
    const increaseCount=()=>{
    setState(state+1);
    
};
    return(
        <div className="counter">
            <h2>Counter App in React</h2>
            <p>Count Value is:{state}</p>
            <button onClick={increaseCount}>inCount</button>
        </div>
    );
}
export default Counter;