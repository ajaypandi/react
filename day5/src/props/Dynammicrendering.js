import { useState } from "react";
export default function Dynammicrending()
{
    const[variable]=useState(198)
    if(variable%2===0)
    {
        return(
            <div>
                <h1> is Divisible</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>is not Divisible</h1>
            </div>
        )
    }
}
