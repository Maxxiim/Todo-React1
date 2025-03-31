import React from 'react'

import NewTaskForm from '../newTaskForm/newTaskForm'

import '../header/header.css'

function Header({ addTask }) {
  return (
    <header className="header">
      <h1 className="header__title">todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  )
}

export default Header
