import React from "react";
class ClassReplace extends React.Component
{
    state={
        color:"red",
        price:"121"
    }
    replace=()=>{this.setState({color:"blue"})}
    render()
    {
        return(
            <div>
                <h1>the color is {this.state.color} and its price is {this.state.price}</h1>
            <button onClick={this.replace}> Click me</button>
            </div>
        )
        }
}

export default ClassReplace;