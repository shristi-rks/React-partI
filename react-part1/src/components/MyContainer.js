import React, { useState } from 'react'
import MyList from './MyList'


function MyContainer() {
    const header = "Really epic list component";
    const [items, setItems] = useState([ 
        { id:"1", text:"this is an item", clicked: false  }, 
        { id:"2", text:"also this", clicked: false  } ]);
    const [text, setText] = useState("");
    const [vip, setVip] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        //create random id
        const id = Math.floor(Math.random() * 100000 + 1000);
        const newItem = { id: id, text: text };
        setItems ([...items, newItem]);
        setText("")
    }
    //Conditional rendering
    const updateItem = (id) => {
        setItems((prevItems)=>
        prevItems.map((item)=> 
        item.id === id ? {...item,clicked:!item.clicked} : item ))
    }
    //pass this function as props

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>Add Text</label>
            <textarea value = {text} onChange={(e)=> setText(e.target.value)}></textarea>
            <label htmlFor="vip"><input id="vip" name="vip" type="checkbox" onChange={
                    (e) => setVip(e.currentTarget.checked)
                } checked={vip}
                /><span>Important</span> </label>

            <button type= "submit" >add item</button>
        </form>
      <MyList header = {header} items = {items} updateItem={updateItem}  />
    </div>
  )
}

export default MyContainer
