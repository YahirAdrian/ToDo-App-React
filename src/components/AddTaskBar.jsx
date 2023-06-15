import React from 'react'
import addButtonIcon from '../assets/icons/add.svg'
import closeIcon from '../assets/icons/close.svg'

function AddTaskBar() {
  return (
    <div className='addTasks'>
        <h3 className='my-3 ms-3'>Agregar Tareas</h3>
        <button className='btn-close-display btn-image' type="button"><img title='cerrar' src={closeIcon} alt="Cerrar" className="small-icon" /></button>

        <div className="mt-4">
          <div className="mx-2 mb-3 p-2 rounded border d-flex justify-content-between  bg-gray ">
              <label htmlFor='button-add-1' className='d-inline ps-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora asperiores</label>
              <div className="task-info">
                  <span className="text-secondary px-3">Lista 1</span>
                  <span className="text-primary px-3">15/06/2023</span>
                  <button className='btn-image ' title='Agregar tarea [nombre tarea]' type="button" id='button-add-1'><img className='small-icon' src={addButtonIcon} alt="Icono agregar" /></button>
              </div>
          </div>

          <div className="mx-2 mb-3 p-2 rounded border d-flex justify-content-between  bg-gray ">
              <label htmlFor='button-add-2' className='d-inline ps-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora asperiores</label>
              <div className="task-info">
                  <span className="text-secondary px-3">Lista 1</span>
                  <span className="text-primary px-3">15/06/2023</span>
                  <button className='btn-image ' title='Agregar tarea [nombre tarea]' type="button" id='button-add-2'><img className='small-icon' src={addButtonIcon} alt="Icono agregar" /></button>
              </div>
          </div>

          <div className="mx-2 mb-3 p-2 rounded border d-flex justify-content-between  bg-gray ">
              <label htmlFor='button-add-3' className='d-inline ps-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora asperiores</label>
              <div className="task-info">
                  <span className="text-secondary px-3">Lista 1</span>
                  <span className="text-primary px-3">15/06/2023</span>
                  <button className='btn-image ' title='Agregar tarea [nombre tarea]' type="button" id='button-add-3'><img className='small-icon' src={addButtonIcon} alt="Icono agregar" /></button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AddTaskBar
