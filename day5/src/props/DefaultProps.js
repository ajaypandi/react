import React from "react";
export default function DefaultProps(props){
    return(
        <div>
            <h1>defaultprops</h1>
            <h1>Default value is {props.name}</h1>
        </div>
    )
}
DefaultProps.defaultProps={
    name:"SKCT"
}