import React from 'react'

import TaskList from '../taskList/taskList'
import Footer from '../footer/footer'

import '../main/main.css'

function Main({
  toggleStartPause,
  updateTaskId,
  updateTaskText,

  clickBtnEdit,
  tasks,
  activeFilter,
  listTasks,
  deleteTask,
  changeTaskStatus,
  allDeleteTask,
  filterTask,
}) {
  return (
    <div className="main">
      <TaskList
        toggleStartPause={toggleStartPause}
        updateTaskText={updateTaskText}
        updateTaskId={updateTaskId}
        clickBtnEdit={clickBtnEdit}
        tasks={tasks}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
      />
      <Footer
        tasks={tasks}
        activeFilter={activeFilter}
        allDeleteTask={allDeleteTask}
        listTasks={listTasks}
        filterTask={filterTask}
      />
    </div>
  )
}

export default Main
