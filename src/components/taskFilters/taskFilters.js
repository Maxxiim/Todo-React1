import React from 'react'
import '../taskFilters/taskFilters.css'

function Filters({ filterTask, activeFilter }) {
  return (
    <ul className="filters">
      <li>
        <button className={`${activeFilter === 'all' ? 'selected' : ''}`} onClick={() => filterTask('all')}>
          All
        </button>
      </li>
      <li>
        <button className={`${activeFilter === 'active' ? 'selected' : ''}`} onClick={() => filterTask('active')}>
          Active
        </button>
      </li>
      <li>
        <button className={`${activeFilter === 'completed' ? 'selected' : ''}`} onClick={() => filterTask('completed')}>
          Completed
        </button>
      </li>
    </ul>
  )
}

export default Filters
