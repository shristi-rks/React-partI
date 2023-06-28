import React from 'react'

function MyList({header, items}) {
  return (
    <div>
      <h2>{header}</h2>
      <ol style={{ listStyle: 'none'}}>
        {items.map((item) => 
        <li key ={item.id} style={{ display: 'list-item' }}>{item.text} </li>)}
      </ol>
    </div>
  )
}

export default MyList
