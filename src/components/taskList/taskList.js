import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task/task'

import '../taskList/taskList.css'

function TaskList({ updateTaskText, updateTaskId, clickBtnEdit, tasks, deleteTask, changeTaskStatus }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <Task
            updateTaskText={updateTaskText}
            updateTaskId={updateTaskId}
            clickBtnEdit={clickBtnEdit}
            key={task.id}
            task={task}
            text={task.text}
            status={task.status}
            edit={task.edit}
            changeTaskStatus={changeTaskStatus}
            deleteTask={deleteTask}
          />
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  deleteTask: PropTypes.func,
  changeTaskStatus: PropTypes.func,
}
export default TaskList
