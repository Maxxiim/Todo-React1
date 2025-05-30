import React from 'react'

import NewTaskForm from '../newTaskForm/newTaskForm'

import '../header/header.css'

function Header({
  inputTextRef,
  messageErrorRef,
  setMinutesInput,
  setSecondsInput,
  minutesInput,
  secondsInput,
  addTask,
}) {
  return (
    <header className="header">
      <h1 className="header__title">todos</h1>
      <NewTaskForm
        inputTextRef={inputTextRef}
        messageErrorRef={messageErrorRef}
        minutesInput={minutesInput}
        secondsInput={secondsInput}
        setMinutesInput={setMinutesInput}
        setSecondsInput={setSecondsInput}
        addTask={addTask}
      />
    </header>
  )
}

export default Header
