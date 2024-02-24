import React from "react"

function Name1({name1}){
    return(
        <div>
            <h1>My name is {name1.firstName} and my last Name is {name1.lastName}-{name1.rollNo}</h1>)
        </div>
    )
}

export default Name1