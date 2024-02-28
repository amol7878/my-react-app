import React from "react";

const heading={
    fontSize:"60px",
    color:"blue",
    border:"1px solid red"
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Another Inline components</h1>
        </div>
    )
}

export default Inline