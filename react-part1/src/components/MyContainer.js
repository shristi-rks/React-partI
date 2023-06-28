import React from 'react'
import MyList from './MyList'


function MyContainer() {
    const header = "Really epic list component";
    const items = [ { id:"1", text:"this is an item" }, { id:"2", text:"also this" } ];
  return (
    <div>
      <MyList header = {header} items = {items}/>
    </div>
  )
}

export default MyContainer
