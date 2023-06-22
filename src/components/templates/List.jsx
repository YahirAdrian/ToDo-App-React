import {Link} from 'react-router-dom'

import bellIcon from '../../assets/icons/bell.svg';
import bookIcon from '../../assets/icons/book.svg';
import computerIcon from '../../assets/icons/computer.svg';
import pencilIcon from '../../assets/icons/pencil.svg';
import ideaIcon from '../../assets/icons/idea.svg';
import personIcon from '../../assets/icons/person.svg';
import shapesIcon from '../../assets/icons/shapes.svg';
import toDoIcon from '../../assets/icons/todo-white.png';

const icons =  [bellIcon, bookIcon, computerIcon, pencilIcon, ideaIcon, personIcon, shapesIcon, toDoIcon];
function List({children, listId, name, icon}) {

  return (
    <Link to={children ? '' : `/lista/${listId}`} className='text-white text-decoration-none '>
      <li className='task-list-element'>
            <img className='small-icon' src={children ? icons[7] : icons[icon]} alt="list icon" />
            <span className='list-name ps-2 small '>{children ? children : name}</span>
      </li>
    </Link>
  )
}

export default List
