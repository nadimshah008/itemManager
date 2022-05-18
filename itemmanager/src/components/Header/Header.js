import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Header.css';


export default function Header() {
    const [headerText,SetHeaderText] = useState("");

    const fetchHeaders  = ()=>{
        axios.get("./base.json")
        .then((res)=> SetHeaderText(res.data[0].Header))
        .catch(error=> console.log(error))
    }
      useEffect(()=>{
        fetchHeaders();
      },[])

  return (
    <header>
    <h1 className='header'>{headerText}</h1>
    </header>
  )
}
