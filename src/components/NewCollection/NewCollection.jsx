import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import "./NewCollection.css"
const NewCollection = () => {
  const [new_collection,setNew_collection]=useState([])

  useEffect(()=>{
   fetch('https://backend-als1.onrender.com/newcollections')
   .then((res)=>res.json())
   .then((data)=>setNew_collection(data))
  },[])
  return (
    <div className='new-collections' id="collections">
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections-items">
          {new_collection.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
      </div>
    </div>
  )
}

export default NewCollection
