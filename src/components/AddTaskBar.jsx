import React from 'react'
import closeIcon from '../assets/icons/close.svg'
import TaskInfo from './templates/TaskInfo'

function AddTaskBar({openTaskBar, tasks, userData}) {
  const tasksNotOfToday = tasks == undefined ? [] : tasks.filter(task => task.today === false);
  const lists = userData.lists;
  return (
    <div className='addTasks overflow-auto '>
        <h3 className='my-3 ms-3'>Agregar Tareas</h3>
        <button className='btn-close-display btn-image' type="button" onClick={openTaskBar}>
          <img title='cerrar' src={closeIcon} alt="Cerrar" className="small-icon" />
        </button>

        <div className="mt-4">
            {tasksNotOfToday.map(task => {
              const listName = lists.filter(list => list.id === task.listId)[0].name;
              task.listName = listName;
              return <TaskInfo key={task.id} taskData={task} userData={userData}/>
            })}
            
        </div>
    </div>
  )
}

export default AddTaskBar
