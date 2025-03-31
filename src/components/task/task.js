import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import '../task/task.css'

function Task({
  updateTaskId,
  updateTaskText,

  clickBtnEdit,
  task,
  text,
  status,
  edit,
  deleteTask,
  changeTaskStatus,
}) {
  return (
    <li
      className={`todo-list-item 
    ${status ? 'completed' : ''}
    ${edit ? 'editing' : ''}
    `}
    >
      <div className="view">
        <input className="toggle" type="checkbox" onChange={() => changeTaskStatus(task.id)} checked={status} />

        {/* Текст поля input */}
        <label>
          <span
            className="description"
            onClick={(e) => {
              e.stopPropagation()
              changeTaskStatus(task.id)
            }}
          >
            {text}
          </span>

          {/* время создания задачи */}
          <span className="created">
            created{' '}
            {formatDistanceToNow(new Date(task.createdAt), {
              includeSeconds: true,
            })}{' '}
            ago
          </span>
        </label>

        {/* кнопка для редактирования текста задачи */}
        <button
          className="icon icon-edit"
          aria-label="btn"
          onClick={(e) => {
            e.stopPropagation()
            clickBtnEdit(task.id)
          }}
        ></button>

        {/* кнопка для удаления задачи */}
        <button
          className="icon icon-destroy"
          aria-label="btn"
          onClick={(e) => {
            e.stopPropagation()
            deleteTask(task.id)
          }}
        ></button>
      </div>

      {/* поле input при изменении текст */}
      <input
        type="text"
        className="edit"
        onChange={updateTaskText}
        onKeyDown={(e) => updateTaskId(e, task.id)}
        defaultValue={text}
      />
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeTaskStatus: PropTypes.func.isRequired,
}

export default Task
