import React,{Component} from "react";
import ChildCr from "./ChildCr";

class ParentPr extends Component{
    constructor(){
        super()
        this.state={
            parentName:"Parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(x){
        alert(`${this.state.parentName} ${x}`)
    }
    render(){
        return(
            <div>
                <ChildCr greetHandler={this.greetParent}></ChildCr>
            </div>
        )
    }
}

export default ParentPr