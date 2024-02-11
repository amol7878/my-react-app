import React,{Component} from "react";
import ChildC from "./ChildC";
class ParentC extends Component{
    constructor(){
        super()
        this.state={
            parentName:"Parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

    render(){
        return(
            <div>
                <ChildC greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentC