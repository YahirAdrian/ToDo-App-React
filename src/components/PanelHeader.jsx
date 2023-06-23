import React,  {useState} from 'react'
import {Form} from 'react-router-dom'
import menuIcon from '../assets/icons/burguer-menu.svg'

function clearForm(e){
    e.target.reset();
}

function PanelHeader(props) {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const lists = props.data !== undefined ? props.data.lists : [];
  return (
    <header className='header my-5 d-flex flex-column align-items-center '>
        <button 
                type='button'
                className='d-md-none d-block border-0 bg-transparent float-start mt-4 ms-4 align-self-start '
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                title='Open menu'>
                    <img className='small-icon' src={menuIcon} alt="Open menu Icon" />
            </button>
        <h1 className="text-primary text-center display-5 fw-bold ">{props?.children || props?.listName}</h1>
        <div className="search-box w-75 my-3">
            <Form action='/' method='POST' onSubmit={clearForm}>
                <input className='w-100 mx-1 p-1 rounded ' type="text" name="task-name" id="task-name" placeholder='Nueva tarea' value={taskName} onChange={e => setTaskName(e.target.value)}/>
                <div className="d-inline-block options-box d-flex gap-md-2 mt-1">
                    <input className='text-primary date-picker rounded-3 p-1' title='Fecha limite (opcional)'  type="date" name="task-date" id="date" value={taskDate} onChange={e => setTaskDate(e.target.value)}/>
                    {(!props?.listName && lists.length > 0) || !props?.listData ? 
                        <select className='text-primary fw-bold  ms-1 list-picker rounded-3 p-1' title='Lista' name="task-list" id="list-name" value={taskList} onChange={e=> setTaskList(e.target.value)}>
                            {lists.map( list => <option key={list.id} value={list.id}>{list.name}</option>)}
                        </select>
                        :
                        <input type="hidden" name="listFromBar" value={props?.listData.id}/>
                    }
                    

                    <input name='newTaskSubmit' className='d-block d-sm-inline-block bt-submit bg-primary rounded-3 text-white fw-bold px-3 py-1 ms-1' type="submit" value="+" />
                </div>
            </Form>
        </div>
    </header>
  )
}

export default PanelHeader
