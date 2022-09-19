import React from 'react'
import ToDo from './ToDo'

const ToDoList = (props) => {
  console.log(props)
  return (
    <div>
      {props.data.map((item) => {
        console.log(item)
        return <ToDo task={item.task} />
      })}
    </div>
  )
}

export default ToDoList
