import React,{Component} from "react";


class Event extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello"
        }
        this.clickH=this.clickH.bind(this)
    }

    clickH(){
        this.setState=({
            message:"GoodBye"
        })
    }
    render(){
        return(
            <div>
                 <p>{this.state.message}</p>
            <button onClick={this.clickH}>click</button>
            </div>
           
        )
    }
}

export default Event