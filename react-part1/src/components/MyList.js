import React from 'react'

function MyList({header, items, updateItem}) {

  return (
    <div>
      <h2>{header}</h2>
      <ol style={{ listStyle: 'none'}}>
        {items.map((item) => 
        <li key ={item.id} 
        style={{ display: 'list-item', textDecoration: item.clicked ? "line-through" : "none" }}
        onClick={()=>updateItem(item.id)}>
            {item.text} </li>)}
      </ol>
    </div>
  )
}

export default MyList
