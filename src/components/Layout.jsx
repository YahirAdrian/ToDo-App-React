import React from 'react'
import {Outlet} from 'react-router-dom'
import TaskList from './TaskList'
import settingsIcon from '../assets/icons/settings.svg'

function Layout() { 
    return (
    <div className='d-flex h-100'>
        <aside className='d-flex h-100 flex-column sidebar bg-secondary-gradient'>
            <h2 className='d-block text-center text-white mt-5 mx-auto fs-1'>Tareas</h2>
            <h3 className='text-white mt-4 ms-3 fs-4'>Tus tareas:</h3>

            <TaskList />

            <div className="settings-box p-2 m-2 d-flex align-items-center">
                <img className='small-icon' src={settingsIcon} alt="Icono configuración" />
                <p className="text-white ps-3 m-0">Configuración</p>
            </div>
        </aside>

        <main className='w-100 h-100 overflow-auto position-relative '>
            <Outlet />
        </main>

    </div>
    )
}

export default Layout
