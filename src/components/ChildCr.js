import React from "react";

let ChildCr = function(props){
    return(
        <div>
            <button onClick={()=>props.greetHandler("AMOL")}>GREET BUTTON</button>
        </div>
    )
}

export default ChildCr