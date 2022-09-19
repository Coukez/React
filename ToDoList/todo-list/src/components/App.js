import React, { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import data from './data.json'
import ToDoList from './todo/ToDoList'

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList data={data} />
    </div>
  )
}

export default App
