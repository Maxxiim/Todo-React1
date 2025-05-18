import React from 'react'

import '../newTaskForm/newTaskForm.css'

function NewTaskForm({
  messageErrorRef,
  inputTextRef,
  addTask,
  minutesInput,
  secondsInput,
  setMinutesInput,
  setSecondsInput,
}) {
  return (
    <>
      <form
        className="new-todo-form"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            const text = inputTextRef.current.value
            addTask(text, Number(minutesInput), Number(secondsInput))
          }
        }}
      >
        <input className="new-todo" ref={inputTextRef} placeholder="What needs to be done?" autoFocus />
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
      <p className="new-todo-form__error" ref={messageErrorRef}></p>
    </>
  )
}

export default NewTaskForm
