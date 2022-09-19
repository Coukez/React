import React from 'react'

const ToDo = ({ task, id, completed, gay }) => {
  return (
    <div>
      <div>{task}</div>
      <div>{id}</div>
      <div>{completed}</div>
      <div>{gay}</div>
    </div>
  )
}

export default ToDo
