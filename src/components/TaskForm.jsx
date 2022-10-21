import React, { useState }  from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/Input/MyInput'


export default function TaskForm({create}) {
  const [task, setTask] = useState({nameTask:'',description:'',date:''})

  const addNewTask = (e) => {
    e.preventDefault()
    const newTask = {
        ...task
    }
    create(newTask)
    setTask({nameTask:'',description:'',date:''})
  }

  return (
        <form>
            <MyInput 
                value={task.nameTask}
                placeholder="Name task" 
                onChange={e => setTask({...task, nameTask: e.target.value})}
            />
            <MyInput 
                value={task.description}
                placeholder="Description of task"
                onChange={e => setTask({...task, description: e.target.value})}
            />
            <MyInput 
                value={task.date}
                type="date"  
                id="dateInput" 
                name="dateInput" 
                placeholder="MM/DD/YYYY"
                onChange={e => setTask({...task, date: e.target.value})}
            />
            <MyButton
            onClick={addNewTask}
            >
                Add new task
            </MyButton>
        </form>
)
}
