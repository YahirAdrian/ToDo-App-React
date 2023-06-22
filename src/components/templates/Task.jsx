import { useState } from "react";


function Task({taskData, userData}) {
  
  const [checked, setChecked] = useState(taskData.completed);
  
  const completeTask= (e) => {
    // const checked = e.target.checked;
    const taskToChange = e.target.id;
    
    if(checked){
      setChecked(false)
      userData.tasks.filter(task => task.id === taskToChange.slice(9))[0].completed = false
    }else{
      setChecked(true)
      userData.tasks.filter(task => task.id === taskToChange.slice(9))[0].completed = true
    }
    localStorage.setItem('user-data', JSON.stringify(userData))
  }

  
  return (
    <div className="task mb-3 p-2 border rounded bg-gray ">
        <input className='checkbox-complete' title={`Completar tarea: ${taskData.name}`} type="checkbox" id={`checkbox-${taskData.id}`} 
          onChange={completeTask}
          checked={checked}
          />
        <label htmlFor={`checkbox-${taskData.id}`} className='task-label d-inline ps-2 w-100'>{taskData.name}</label>
    </div>
  )
}

export default Task
