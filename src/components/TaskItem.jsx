import React from 'react'

export default function TaskItem(props) {
  return (
    <div className='task'>
      <div>
        {props.task.nameTask + ' '}
        {props.task.description + ' '}
        {props.task.date }
      </div>
      <div>
        <button onClick={() => props.remove(props.task)}>Delete</button>
      </div>
    </div>
  )
}
