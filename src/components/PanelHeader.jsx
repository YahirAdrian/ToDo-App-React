import React from 'react'

function PanelHeader() {
  return (
    <header className='header my-5 d-flex flex-column align-items-center '>
        <h1 className="text-primary text-center display-5 fw-bold ">My ToDo</h1>
        <div className="search-box w-75 my-3">
            <form action="#">
                <input className='w-75 mx-1 p-1 rounded ' type="text" name="task-name" id="task-name" placeholder='Nueva tarea'/>
                <div className="d-inline-block options-box">
                    <input className='text-primary date-picker rounded-3 p-1' title='Fecha limite (opcional)'  type="date" name="date" id="date"/>
                    <select className='text-primary fw-bold  ms-1 list-picker rounded-3 p-1' title='Lista' name="list-name" id="list-name">
                        <option value="list1">List 1</option>
                        <option value="list2">List 2</option>
                        <option value="list3">List 3</option>
                    </select>

                    <input className='bt-submit bg-primary rounded-3 text-white fw-bold px-3 py-1 ms-1' type="submit" value="Agregar" />
                </div>
            </form>
        </div>
    </header>
  )
}

export default PanelHeader
