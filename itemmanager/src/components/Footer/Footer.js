import axios from 'axios'
import React, { useEffect, useState } from 'react';
import "./Footer.css";

export default function Footer() {
  const [items,setItems] = useState([]);
  const [total,setTotal] = useState(0);
  const fetchHeaders  = ()=>{
    axios.get("./data.json")
    .then((res)=> {setItems(res.data)})
    .catch(error=> console.log(error))
}
  useEffect(()=>{
    fetchHeaders();
   
  },[])
  useEffect(()=>{
    getTotalPrice();
  },[items])
  const getTotalPrice = ()=>{
    let t = 0;
    items.forEach((item)=>{
        t +=item.price;
        setTotal(t);
    })
  }

  return (
    <div className='footer'>Total Price of all Items: {total} </div>
  )
}
