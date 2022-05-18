import React from 'react';
import "./DeletedItem.css";

export default function DeletedItem(props) {
   const {items} = props;
   let count = 0;
   const itemData = items.filter(i => !i.isActive).map((d) => <div className='card col-lg-6 col-sm-12' key={d.id}><h2>Brand: {d.brand}{d.name}</h2> <span className='model'>Model: {d.model}</span><span className='type'>Type: {d.type}</span> <span className='price'>Price : {d.price}</span> <button name={d.id} className='resBtn' onClick={props.restoredItemID}>RESTORE</button></div>);

   const itemFilter =  items.filter(i => !i.isActive);
   itemFilter.forEach((i)=>{
       count += i.price;
   })

  return (
    <div className='activeItems'>
        <h1 className='title'>Deleted Items</h1>
        {itemData.length ? itemData : <h2 className='nothing'>Nothing Deleted</h2>}
       <h3 className='count'>Total Price : {count}</h3>
    </div>
  )
}
