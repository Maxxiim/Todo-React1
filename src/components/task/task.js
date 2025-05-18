import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import '../task/task.css'

function Task({
  toggleStartPause,
  updateTaskId,
  updateTaskText,
  clickBtnEdit,

  task,
  playing,
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
          <span className="created">
            <span className="timer">
              <button
                className={`icon ${playing ? 'icon-pause' : 'icon-play'}`}
                onClick={(event) => {
                  event.stopPropagation()
                  toggleStartPause(task.id)
                }}
              ></button>
              <span className="timer__text">
                {task.minutes < 10 ? `0${task.minutes}` : task.minutes}:
                {task.seconds < 10 ? `0${task.seconds}` : task.seconds}
              </span>
            </span>
            created{' '}
            {formatDistanceToNow(new Date(task.createdAt), {
              includeSeconds: true,
            })}{' '}
            ago
          </span>
        </label>

        <button
          className="icon icon-edit"
          aria-label="btn"
          onClick={(e) => {
            e.stopPropagation()
            clickBtnEdit(task.id)
          }}
        ></button>

        <button
          className="icon icon-destroy"
          aria-label="btn"
          onClick={(e) => {
            e.stopPropagation()
            deleteTask(task.id)
          }}
        ></button>
      </div>

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
