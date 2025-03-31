import React, { useState } from 'react'

import Header from '../header/header'
import Main from '../main/main'
import '../app/app.css'

function App() {
  const tasks = []

  const [allTasks, setAllTasks] = useState([...tasks])
  const [activeFilter, setActiveFilter] = useState('all')

  const [changeInputValue, setChangeInputValue] = useState()

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

  const addTask = (text) => {
    if (text.length === 0) return

    const maxId = allTasks.length > 0 ? Math.max(...allTasks.map((item) => item.id)) : 0

    const newTask = {
      id: maxId + 1,
      text: text,
      status: false,
      createdAt: Date.now(),
    }

    setAllTasks([...allTasks, newTask])
  }

  const deleteTask = (id) => {
    setAllTasks(allTasks.filter((task) => task.id !== id))
  }

  const allDeleteTask = () => {
    setAllTasks(allTasks.splice(0, allTasks.length))
    setAllTasks([...allTasks])
  }

  const changeTaskStatus = (id) => {
    setAllTasks(allTasks.map((item) => (item.id === id ? { ...item, status: !item.status } : item)))
  }

  const listTasks = () => allTasks.filter((task) => !task.status).length

  const filterTask = (filter) => {
    setActiveFilter(filter)
  }

  return (
    <div className="todoapp">
      <Header addTask={addTask} />

      <Main
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
