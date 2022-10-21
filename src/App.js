import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './style/style.css'

function App() {
  let firstTaskDate = new Date("2018-02-18").toISOString().split('T')[0];
  let secondTaskDate = new Date("2019-12-12").toISOString().split('T')[0];
  let thirdTaskDate = new Date("2023-06-01").toISOString().split('T')[0];
  let fouterTaskDate = new Date("2022-03-21").toISOString().split('T')[0];


  const [tasks, setTasks] = useState([
    {nameTask:"Go to ATB", description: "bay fruit and water", date: firstTaskDate},
    {nameTask:"Make breakfast", description: "coffee and sandwith", date: secondTaskDate},
    {nameTask:"Call to the mother", description: "ask her when they come", date: thirdTaskDate},
    {nameTask:"Go to the city", description: "work meeting", date: fouterTaskDate},
  ])


 
  const deleteTask = (task) => {
    setTasks(tasks.filter(p => p.nameTask !== task.nameTask))
  } 
    const createTask = (newTask) => {
      setTasks([...tasks, newTask])
    }

  
  return (
    <div className="App">
      <h2>Task list</h2>
          <div className="showTask">
            <label>Show completed tasks</label>
            <input type="checkbox"/>
          </div>

          <TaskForm create={createTask}/>

          <div className='taskList'>

            <TaskList remove={deleteTask} tasks={tasks}/>
            
          </div>
    </div>
  );
}


export default App;
