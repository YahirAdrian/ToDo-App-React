import React, { useState } from 'react'
import Task from './templates/Task'




function Tasks({listId, openTaskBar, userData}) {

  const data = JSON.parse(localStorage.getItem('user-data'));
  const tasksData = !data.tasks ? [] : data.tasks;
  const tasksOfList = tasksData.filter(task => task.listId === listId);
  const tasks = tasksData.filter(task => task.today === true);
  const list = data.lists.filter(list => list.id === listId);
  return (
    <div className='task-box p-4'>
      <div className="tasks ">
        <div className="d-flex justify-content-between w-100 px-4 mb-4">
          <h3 className='text-primary '> {list[0]?.name || 'Tareas de Hoy'}</h3>
          {!listId &&
            <button className='btn btn-primary text-white ' onClick={openTaskBar}>Agregar Tareas</button>
          }

        </div>
        {tasksOfList.length >0 && tasksOfList.map(task => <Task userData={data} key={task.id} taskData={task}/>)}
        
        {!listId && tasks.map(task => <Task userData={userData} key={task.id} taskData={task}/>)}
      </div>
    </div>
  )
}

export default Tasks
