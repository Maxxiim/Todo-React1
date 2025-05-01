import React, { useEffect, useState } from 'react'

import Header from '../header/header'
import Main from '../main/main'
import '../app/app.css'

function App() {
  const tasks = [
    { id: 1, text: 'test1', edit: false, playing: false, minutes: 6, seconds: 0, status: false, createdAt: Date.now() },
    { id: 2, text: 'test2', edit: false, playing: false, minutes: 1, seconds: 0, status: false, createdAt: Date.now() },
  ]

  const [allTasks, setAllTasks] = useState([...tasks])
  const [activeFilter, setActiveFilter] = useState('all')

  const [changeInputValue, setChangeInputValue] = useState()
  const [minutesInput, setMinutesInput] = useState('')
  const [secondsInput, setSecondsInput] = useState('')

  const updateTaskText = (e) => {
    setChangeInputValue(e.target.value)
  }

  const updateTaskId = (e, id) => {
    if (e.key === 'Enter') {
      setAllTasks(allTasks.map((task) => (task.id === id ? { ...task, text: changeInputValue, edit: false } : task)))
    }
    if (e.key === 'Escape') {
      setAllTasks(allTasks.map((task) => (task.id === id ? { ...task, edit: false } : task)))
    }
  }

  const clickBtnEdit = (id) => {
    setAllTasks(allTasks.map((task) => (task.id === id ? { ...task, edit: !task.edit } : task)))
  }

  const filteredTask = allTasks.filter((task) =>
    activeFilter === 'all' ? true : activeFilter === 'active' ? !task.status : task.status
  )

  const addTask = (text, minutesInput, secondsInput) => {
    if (text.length === 0) return
    const maxId = allTasks.length > 0 ? Math.max(...allTasks.map((item) => item.id)) : 0

    const newTask = {
      id: maxId + 1,
      text: text,
      playing: false,
      minutes: minutesInput,
      seconds: secondsInput,
      status: false,
      edit: false,
      createdAt: Date.now(),
    }

    setAllTasks([...allTasks, newTask])
  }

  const deleteTask = (id) => {
    setAllTasks(allTasks.filter((task) => task.id !== id))
  }

  const allDeleteTask = () => {
    setAllTasks(allTasks.filter((task) => !task.status))
  }

  const changeTaskStatus = (id) => {
    setAllTasks(allTasks.map((item) => (item.id === id ? { ...item, status: !item.status } : item)))
  }

  const listTasks = () => allTasks.filter((task) => !task.status).length

  const filterTask = (filter) => {
    setActiveFilter(filter)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAllTasks((tasks) =>
        tasks.map((task) => {
          if (task.edit) return { ...task, playing: !task.playing }
          if (!task.playing) return task

          const totalSeconds = task.minutes * 60 + task.seconds
          if (totalSeconds <= 0) {
            return {
              ...task,
              playing: !task.playing,
              status: true,
            }
          }
          const newTotalSeconds = totalSeconds - 1
          return {
            ...task,
            minutes: Math.floor(newTotalSeconds / 60),
            seconds: newTotalSeconds % 60,
          }
        })
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [allTasks])

  const toggleStartPause = (id) => {
    setAllTasks((tasks) => tasks.map((task) => (task.id === id ? { ...task, playing: !task.playing } : task)))
  }

  return (
    <div className="todoapp">
      <Header
        minutesInput={minutesInput}
        secondsInput={secondsInput}
        setSecondsInput={setSecondsInput}
        setMinutesInput={setMinutesInput}
        addTask={addTask}
      />

      <Main
        toggleStartPause={toggleStartPause}
        updateTaskText={updateTaskText}
        updateTaskId={updateTaskId}
        tasks={filteredTask}
        activeFilter={activeFilter}
        clickBtnEdit={clickBtnEdit}
        changeTaskStatus={changeTaskStatus}
        deleteTask={deleteTask}
        allDeleteTask={allDeleteTask}
        listTasks={listTasks}
        filterTask={filterTask}
      />
    </div>
  )
}
export default App
