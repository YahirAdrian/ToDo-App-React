import React from 'react'

function Tasks() {
  return (
    <div className='task-box p-4'>
      <h3 className='text-primary '>Tareas de hoy</h3>
      <div className="tasks ">
        <div className="task mb-3 p-2 border rounded bg-gray ">
          <input className='checkbox-complete' title='Completar tarea: [name]' type="checkbox" id="checkbox-1" />
          <label htmlFor='checkbox-1' className='d-inline ps-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora asperiores</label>
        </div>

        <div className="task mb-3 p-2 border rounded bg-gray ">
          <input className='checkbox-complete' title='Completar tarea: [name]' type="checkbox" id="checkbox-2" />
          <label htmlFor='checkbox-2' className='d-inline ps-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora asperiores</label>
        </div>

        <div className="task mb-3 p-2 border rounded bg-gray ">
          <input className='checkbox-complete' title='Completar tarea: [name]' type="checkbox" id="checkbox-3" />
          <label htmlFor='checkbox-3' className='d-inline ps-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora asperiores</label>
        </div>

        <div className="task mb-3 p-2 border rounded bg-gray ">
          <input className='checkbox-complete' title='Completar tarea: [name]' type="checkbox" id="checkbox-4" />
          <label htmlFor='checkbox-4' className='d-inline ps-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora asperiores</label>
        </div>



      </div>
    </div>
  )
}

export default Tasks
