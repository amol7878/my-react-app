import React, { Component } from "react";

class UserGreeting extends Component {
    constructor() {
        super()
        this.state = {
            isLogggedin: true
        }
    }

    // FIRST---- IF ELSE APROOACH

    // render(){
    //  if(this.state.isLogggedin){
    //     return <div>Welcome Chinmay</div>
    //  }
    //  else{
    //     return <div>Welcome Amol</div>
    //  } 
    // }


    // ELEMENT VERIABLE APPROACH
    // render(){
    //     let message=undefined
    //     if(this.state.isLogggedin){
    //         message=<div>Welcome Chinmay</div>
    //     }
    //     else{
    //         message=<div>Welcome User</div>
    //     }
    //     return <div>{message}</div>
    // }


    // TERNARY --OPERATOR-- APPROACH
    // render(){
    //     return this.state.isLogggedin?<div>Welcome Chinmay</div>:<div>Welcome Amol</div>
    // }

    //  SHORT CIRCUIT

    render(){
        return this.state.isLogggedin && <div>Welcome Chinmay</div>
    }


}

export default UserGreeting 