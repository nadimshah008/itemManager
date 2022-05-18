import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ActiveItem from './ActiveItem/ActiveItem';
import DeletedItem from './DeletedItem/DeletedItem';
import "./Main.css";

export default function Main() {

    const [items,setItems] = useState([]);
    const [actItem,setActItems] =useState([]);

    const fetchHeaders  = ()=>{
        axios.get("./data.json")
        .then((res)=> {setItems(res.data)})
        .catch(error=> console.log(error))
    }
      useEffect(()=>{
        fetchHeaders();
      },[])
      useEffect(()=>{
        setActItems(items);
      },[items])

      useEffect(()=>{
       
      },[actItem])

    const deleteItem = (e)=>{
        const index =  items.findIndex((i=>i.id==e.target.name));
        items[index].isActive = false;
        setActItems([...items]);
    }

    const restoreItem = (e)=>{
        const index =  items.findIndex((i=>i.id==e.target.name));
        items[index].isActive = true;
        setActItems([...items]);
    }



  return (
    <div className='section col-lg-12 col-sm-12'>
        <ActiveItem items={actItem} deletedItemID={deleteItem}></ActiveItem>
        <DeletedItem items={actItem} restoredItemID={restoreItem}></DeletedItem>
    </div>
  )
}
