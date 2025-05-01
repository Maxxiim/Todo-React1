import React from 'react'

import '../newTaskForm/newTaskForm.css'

function NewTaskForm({ addTask, minutesInput, secondsInput, setMinutesInput, setSecondsInput }) {
  return (
    <form className="new-todo-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            addTask(e.target.value, Number(minutesInput), Number(secondsInput))
            e.target.value = ''
            setMinutesInput('')
            setSecondsInput('')
          }
        }}
        autoFocus
      />
      <input
        className="new-todo-form__timer"
        type="number"
        value={minutesInput}
        onChange={(e) => setMinutesInput(Number(e.target.value))}
        placeholder="Min"
      />
      <input
        className="new-todo-form__timer"
        type="number"
        value={secondsInput}
        onChange={(e) => setSecondsInput(Number(e.target.value))}
        placeholder="Sec"
      />
    </form>
  )
}

export default NewTaskForm
