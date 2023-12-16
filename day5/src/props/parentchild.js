function Parent()
{
    return(
        <div>
            <h1>Parent</h1>
            <Child ajay="hssjhd"></Child>
        </div>
    )
}
function Child(pros)
{
    return(
        <div>
            <h1>child name id{pros.ajay}</h1>
        </div>
    )
}
export default Parent;