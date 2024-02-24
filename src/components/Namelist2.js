import React from "react";
import Person from "./Person";
function Namelist2() {
    let names = ["amol", "raj", "sanjay", "parachui"]
    let listName = names.map((names) => <h1>{names}</h1>)

    let personList = [
        {
            id: 1,
            firstName: "Amol",
            lastName: "Shinde",
            rollNo: 22
        },
        {
            id: 2,
            firstName: "rudra",
            lastName: "Shinde",
            rollNo: 25
        }
        ,
        {
            id: 3,
            firstName: "amey",
            lastName: "Shinde",
            rollNo: 24
        }
    ]
    //personList = personList.map((person) => <h1>My first name is {person.firstName} and My lastName is {person.lastName}-{person.rollNo}</h1>)
    personList=personList.map((person)=> <Person person={person}/>)
    return (
        // <div>
        //     <h1>{names[0]}</h1>
        //     <h1>{names[1]}</h1>
        //     <h1>{names[2]}</h1>
        //     <h1>{names[3]}</h1>
        // </div>

        // names.map((names)=> <h1>{names}</h1>)
        <div>
            {/* {
                listName
            } */}
            {personList}
        </div>

    )
}

export default Namelist2