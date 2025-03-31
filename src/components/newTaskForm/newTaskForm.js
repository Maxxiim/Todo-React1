import React from 'react'

import '../newTaskForm/newTaskForm.css'

function NewTaskForm({ addTask }) {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addTask(e.target.value)
          e.target.value = ''
        }
      }}
      autoFocus
    />
  )
}

export default NewTaskForm
