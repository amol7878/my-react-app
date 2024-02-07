import React,{Component} from "react";

// class PropC extends Component{
//     // this.propsfirstName="ram"
//     render(){
//         return <h1>Hello I am {this.props.firstName}{this.props.lastName} Learning New Things</h1>

    
//     }
// }

class PropC extends Component{
    constructor(props){
        let {firstName,lastName}=props
        this.state={
            firstName:firstName,
            lastName:lastName
        }
    }

    render(){
        return(
            <h1>Hello i am {this.firstName} {this.lastName} learning New Things</h1>
        )
    }
}


export default PropC