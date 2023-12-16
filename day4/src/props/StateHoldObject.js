import React, { useState } from 'react'
export default function StateHoldObject()
{
    const[Team,setTeam]=useState({cid:1, cname:"skct",year:2023});
    const changeKvl=()=>{
        setTeam((prev)=>{return{...prev,year:"TT"}})
    }
    return(
        <div>
            <h1>clg id{Team.cid}</h1>
            <h1>clg name{Team.cname}</h1>
            <h1>year{Team.year}</h1>
            <button onClick={changeKvl}>click me</button>
        </div>
    )
}