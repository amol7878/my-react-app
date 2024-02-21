import React from "react";

function Namelistt() {
    // let names = ["amol", "sham", "ram", "kanchan"]
    // let nameslist = names.map(name => <h1>{name}</h1>)
    // return (
    //     <div>
    //         {/* <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1>
    //         <h1>{names[3]}</h1> */}
    //         {/* {
    //             names.map(name => <h1>{name}</h1>)
    //         } */}
    //         {
    //             nameslist
    //         }
    //     </div>
    // )

    const person=[
        {
            firstName:"Amol",
            lastName:"Shinde"
        },
        {
            firstName:"Aarti",
            lastName:"kale"
        },
        {
            firstName:"shiva",
            lastName:"Shevede"
        }
    ]

    let personlist=person.map(person => <h1>My first Name is {person.firstName} and My last Name is {person.lastName}</h1>)

    return(
        <div>
            {personlist}
        </div>
    )

}

export default Namelistt