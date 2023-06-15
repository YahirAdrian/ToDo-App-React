import React from 'react'
import bellIcon from '../assets/icons/bell.svg';
import bookIcon from '../assets/icons/book.svg';
import computerIcon from '../assets/icons/computer.svg';
import pencilIcon from '../assets/icons/pencil.svg';
import ideaIcon from '../assets/icons/idea.svg';
import personIcon from '../assets/icons/person.svg';
import shapesIcon from '../assets/icons/shapes.svg';
import toDoIcon from '../assets/icons/todo-white.png';

const icons = { bellIcon, bookIcon, computerIcon, pencilIcon, ideaIcon, personIcon, shapesIcon, toDoIcon};

function TaskList() {
  return (
    <ul className='task-list my-5 align-self-start w-100 d-block list-unstyled '>
        <li className='task-list-element'>
          <img className='small-icon' src={icons.personIcon} alt="list icon" />
          <span className='list-name ps-2'>Hoy</span>
        </li>

        <li className='task-list-element'>
          <img className='small-icon' src={icons.toDoIcon} alt="list icon" />
          <span className="list-name ps-2">Todas</span>
        </li>

        <li className='task-list-element'>
          <img className='small-icon' src={icons.computerIcon} alt="list icon" />
          <span className='list-name ps-2'>Lista 1</span>
        </li>

        <li className='task-list-element'>
          <img className='small-icon' src={icons.shapesIcon} alt="list icon" />
          <span className='list-name ps-2'>Lista 2</span>
        </li>

        <li className='task-list-element'>
          <img className='small-icon' src={icons.ideaIcon} alt="list icon" />
          <span className='list-name ps-2'>Lista 3</span>
        </li>
    </ul>
  )
}

export default TaskList
