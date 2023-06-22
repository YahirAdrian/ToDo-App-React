import Select from 'react-select'
import {Outlet, Form, useLoaderData, Link} from 'react-router-dom'
import TaskLists from './TaskLists'
import {generateId} from '../utilities/utils.js'

import resetIcon from '../assets/icons/reset.svg'
import bellIcon from '../assets/icons/bell.svg';
import bookIcon from '../assets/icons/book.svg';
import computerIcon from '../assets/icons/computer.svg';
import pencilIcon from '../assets/icons/pencil.svg';
import ideaIcon from '../assets/icons/idea.svg';
import personIcon from '../assets/icons/person.svg';
import shapesIcon from '../assets/icons/shapes.svg';

const listIcons = [bellIcon, bookIcon, computerIcon, pencilIcon, ideaIcon, personIcon, shapesIcon]
const options = [
    {value: '0', label: <img className='small-icon' src={listIcons[0]} alt='Icono campana'/>},
    {value: '1', label: <img className='small-icon' src={listIcons[1]} alt='Icono libro' />},
    {value: '2', label: <img className='small-icon' src={listIcons[2]} alt='Icono computadora' />},
    {value: '3', label: <img className='small-icon' src={listIcons[3]} alt='Icono lapiz' />},
    {value: '4', label: <img className='small-icon' src={listIcons[4]} alt='Icono idea' />},
    {value: '5', label: <img className='small-icon' src={listIcons[5]} alt='Icono persona' />},
    {value: '6', label: <img className='small-icon' src={listIcons[6]} alt='Icono figuras' />}
]

export async function action({request, params}){
    const userData = JSON.parse(localStorage.getItem('user-data'));
    const requestData = await request.formData();

    if(requestData.get('newListSubmit')){
        const listName = requestData.get('newListName');
        const listIcon = requestData.get('newListIcon');
        const newList = { id: generateId('list-'), name: listName, iconId: listIcon};
    
        userData.lists = [...userData.lists, newList]
        localStorage.setItem('user-data', JSON.stringify(userData))

    }else if(requestData.get('newTaskSubmit')){
        let taskList;
        if(requestData.get('task-list')){
            taskList = requestData.get('task-list');
        }else{
            taskList = requestData.get('listFromBar')

        }

        const taskName = requestData.get('task-name');
        const taskDate = requestData.get('task-date');

        const newTask = {
            id: generateId('task-'),
            listId: taskList,
            name: taskName,
            due: taskDate,
            completed: false,
            today: false
        }

        userData.tasks = [...userData.tasks, newTask];
        localStorage.setItem('user-data', JSON.stringify(userData))
        
        
    }
    return null;
}


function resetApp(){
    localStorage.setItem('user-data', '{}')
}
function Layout() { 
    const data = JSON.parse(useLoaderData());
    const lists = !data ? [] : data.lists;

    return (
    <div className='d-flex h-100'>
        <aside className='offcanvas-md offcanvas-start d-sm-flex  h-100 flex-column sidebar bg-secondary-gradient '
            data-bs-scroll="true" tabIndex="" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"
            >
            <div className="aside-header offcanvas-header">
                {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
            </div>
            <h2 className='d-block text-center text-white mt-5 mx-auto fs-1 offcavas-header' id="offcanvasLabel">Tareas</h2>


            <TaskLists className='off-canvas-body' tasklists={lists}/>

            <div className="settings-box my-2 d-flex flex-column">
                <Form className='newTaskBarForm d-block p-2 mb-2' action='/'method='POST'>
                    <div className="d-flex form-group">
                        <Select options={options} menuPlacement='top' name='newListIcon'/>

                        <input className='form-control bg-transparent text-white border-0 ' type="text" name='newListName' id='newListNameInput' placeholder='Nueva lista'/>
                        <input name='newListSubmit' className=' btn btn-secondary mx-2 my-1 border-white ' type="submit" value="+" />

                    </div>
                </Form>

                <div className="d-flex ps-3 align-items-center settings">
                    <img className='small-icon' src={resetIcon} alt="Icono reiniciar" />
                    <button title='Reiniciar aplicación' type='button' className="btn btn-transparent text-white ps-3 m-0"
                    onClick={resetApp}>Reinciciar App</button>
                </div>
            </div>
        </aside>

        <main className='w-100 h-100 overflow-auto position-relative '>
            
            <Outlet />
        </main>

    </div>
    )
}

export default Layout
