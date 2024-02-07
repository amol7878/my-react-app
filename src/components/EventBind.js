import React,{Component} from "react";

class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello"
        }
   //this.clickHandler=this.clickHandler.bind(this)
    

    }
    // clickHandler(){
    //     this.setState({
    //         message:"GoodeBye"
    //     })
    //    // console.log(this)
    // }

    clickHandler=()=>{
        this.setState({
            message:"GoodBye"
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>click</button>


            </div>
        )
    }
}

export default EventBind



// let Amol={
//     firstName:"Amol",
//     lastName:"Shinde"
// }

// let chinmay={
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// function dispplayName(){
//     console.log(this.firstName+this.lastName)
// }

// let b=dispplayName.bind(chinmay)
// dispplayName.apply(chinmay)
// dispplayName.call(chinmay)

// let info={
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//          console.log(this.firstName+this.lastName)
//          let display2=()=>{
//             console.log(this.firstName+this.lastName)
//          }
//          display2()
//     }
// }
// info.display()


