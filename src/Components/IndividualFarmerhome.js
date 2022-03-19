import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function IndividualFarmerhome() {
var farmername=localStorage.getItem("name");
let Navigate=useNavigate();
  return (

    <>

    we are in farmers home 
    <br>
    </br>
    welcome 
{farmername}

<Link to="/individualfarmercropselling">go to farmers selling</Link>


<button onClick={()=>{
  localStorage.clear();
  Navigate("/");
}}>Logout</button>
    </>
  )
}
