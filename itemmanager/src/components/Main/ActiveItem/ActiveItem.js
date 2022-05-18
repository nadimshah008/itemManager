import React from 'react';
import './ActiveItem.css';
export default function ActiveItem(props) {
    const {items} = props;
    let count = 0;
   const itemData = items.filter(i => i.isActive).map((d) => <div className='card col-lg-6 col-sm-12' key={d.id}><h2 className='brand'>Brand: {d.brand}{d.name}</h2> <span className='model'>Model: {d.model}</span><span className='type'>Type: {d.type}</span> <span className='price'>Price : {d.price}</span> <button name={d.id} className='delBtn' onClick={props.deletedItemID} >DELETE</button></div>);

   const itemFilter =  items.filter(i => i.isActive);
   itemFilter.forEach((i)=>{
       count += i.price;
   })
   console.log("itemFilter",itemFilter);

  return (

    <div className='activeItems'>
        <h1 className='title'>Active Items</h1>
        {itemData}
        <h3 className='count'>Total Price : {count}</h3>
    </div>
  )
}
