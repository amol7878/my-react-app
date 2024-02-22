import React from "react";

function Person({person}){
    return(
        <div>
            <h1>My first name is {person.firstName} and My lastName is {person.lastName}-{person.rollNo}</h1>
        </div>
    )
} export default Person