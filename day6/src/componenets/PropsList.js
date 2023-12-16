function PropsList(props)
{
    return(
        <div>
            {props.name}
        </div>
    )
}

 export default function Display()
{
    const Name=["Kohli","Dhoni","Rohit","ABD"];
    const Dis_Name=Name.map((variable)=><PropsList name={variable}> </PropsList>)
    return(
        <div style={{backgroundColor:"orange"}}>
            {Dis_Name}
        </div>
    )
}
