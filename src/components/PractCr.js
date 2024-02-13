import React from "react";

let PractCr=function(props){
    return(
        <div>
            <button onClick={()=>props.greetHandler("AMOL")}>GREETDISPLAY</button>
        </div>
    )
}

export default PractCr