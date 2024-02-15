import React,{Component} from "react";
import PractCr from "./PractCr";
class PractPr extends Component{
    constructor(){
        super()
        this.state={
            parentName:"Parent"
        }
        this.greetPaerent=this.greetPaerent.bind(this)

    }
    greetPaerent(){
        alert(`${this.state.parentName}`)
    }
    render(){
        return(
            <div>
                 <c greetHandler={this.greetPaerent}></c>
            </div>
           
        )
    }
}

export default PractPr 