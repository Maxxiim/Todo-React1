import React from 'react'

import '../newTaskForm/newTaskForm.css'

function NewTaskForm({ addTask, minutesInput, secondsInput, setMinutesInput, setSecondsInput }) {
  return (
    <>
      <form
        className="new-todo-form"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            const text = document.querySelector('.new-todo').value
            addTask(text, Number(minutesInput), Number(secondsInput))
          }
        }}
      >
        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
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
      <p className="new-todo-form__error"></p>
    </>
  )
}

export default NewTaskForm
