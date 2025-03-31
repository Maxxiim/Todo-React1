import React from 'react'

import Filters from '../taskFilters/taskFilters'

import '../footer/footer.css'

function Footer({ allDeleteTask, listTasks, filterTask, activeFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{listTasks()} items left</span>
      <Filters filterTask={filterTask} activeFilter={activeFilter} />
      <button className="clear-completed" onClick={() => allDeleteTask()}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
