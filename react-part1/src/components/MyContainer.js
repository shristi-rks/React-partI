import React, { useState } from 'react'
import MyList from './MyList'


function MyContainer() {
    const header = "Really epic list component";
    const [items, setItems] = useState([ 
        { id:"1", text:"this is an item" }, 
        { id:"2", text:"also this" } ]);
    const [text, setText] = useState("");
    const onSubmit = (e) => {
        e.preventDefault()
        const newItem = { id:"3", text: text };
        setItems ([...items, newItem]);
        setText("")
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>Add Text</label>
            <textarea value = {text} onChange={(e)=> setText(e.target.value)}></textarea>
            <button type= "submit" >add item</button>
        </form>
      <MyList header = {header} items = {items} />
    </div>
  )
}

export default MyContainer
