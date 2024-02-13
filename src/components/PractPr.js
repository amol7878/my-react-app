import React,{Component} from "react";
import PractCr from "./PractCr";
class PractPr extends Component{
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
                <PractCr greetHandler={this.greetParent}></PractCr>
            </div>
        )
    }
}

export default PractPr