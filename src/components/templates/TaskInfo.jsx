import { Form } from 'react-router-dom';
import addButtonIcon from '../../assets/icons/add.svg'
function TaskInfo({taskData, userData}) {
  const {id, name, due, listId, listName} = taskData;

  const handleSubmit = e =>{
    e.preventDefault();
    const taskId = e.target[0].value;
    userData.tasks.filter(task => task.id === taskId)[0].today = true;

    e.target.parentElement.parentElement.remove()
    localStorage.setItem('user-data', JSON.stringify(userData));

  }

  return (
    <div className="mx-2 mb-3 p-2 rounded border d-flex justify-content-between flex-wrap  bg-gray ">
        <label htmlFor={`button-add-${id}`} className='d-inline ps-2' title='Agregar tarea'>{name}</label>
        <div className="task-info">
            <Form onSubmit={handleSubmit}>
              <input type="hidden" name="task-id" value={id}/>
              <span className="text-secondary px-3">{listName}</span>
              <span className="text-primary px-3">{due}</span>
              <button className='btn-image aling-self-end ' title='Agregar tarea [nombre tarea]' type="submit" id={`button-add-${id}`}><img className='small-icon' src={addButtonIcon} alt="Icono agregar" 
                
              /></button>

            </Form>
        </div>
    </div>
  )
}

export default TaskInfo
