import React from 'react'

function Namelist() {
    //     let names=["amol","chinmay","Sham","Radhe"]
    // let namesList=names.map(name =><h1>{name}</h1>)

    //  return(
    //     <div>
    //         {/* <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1>
    //         <h1>{names[3]}</h1> */}

    //         {/* {
    //             names.map(name =><h1>{name}</h1>)
    //         } */}
    // {
    //     namesList
    // }

    //     </div>
    //  )


    const Person = [
        {
            firstName: "Chinmay",
            lastName: "Deshpande"
        },
        {
            firstName: "Amol",
            lastName: "Shinde"
        },
        {
            firstName: "Kirti",
            lastName: "Vyas"
        }
    ]


let personList=Person.map(person =><h1>My firstNam is {person.firstName} and My lastName is {person.lastName}</h1>)
return(
    <div>
        {personList}
    </div>
)


}

export default Namelist