import React from "react";
import Name1 from "./Pract2P";
function Namelist3(){
let names1=["amol","raj","sanjay","prahshant"]
let listname=names1.map((name)=><h1>{name}</h1>)

let personList=[
    {
        id:1,
        firstName:"Amol",
        lastName:"Shinde",
        rollNo:23

    },
    {
        id:1,
        firstName:"Amol",
        lastName:"Shinde",
        rollNo:23

    }
    , {
        id:1,
        firstName:"Amol",
        lastName:"Shinde",
        rollNo:23

    }
]
personList=personList.map((name1)=><Name1 name1={name1}/>)
//personList=personList.map((name1)=><h1>My name is {name1.firstName} and my last Name is {name1.lastName}-{name1.rollNo}</h1>)
    return(
        // <div>
        //     <h1>{names1[0]}</h1>
        //      <h1>{names1[1]}</h1>
        //      <h1>{names1[2]}</h1>
        //      <h1>{names1[3]}</h1>

        // </div>

        // <div>
        //     {listname}
        // </div>
        <div>
            {personList}
        </div>

    )
}

export default Namelist3


