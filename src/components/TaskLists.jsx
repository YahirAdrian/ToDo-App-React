import React from 'react'
import List from './templates/List'

function TaskLists({tasklists}) {
  return (
    <ul className='task-list my-5 align-self-start w-100 d-block list-unstyled '>
      <List>Hoy</List>
      {tasklists == undefined ? '' : tasklists.map(list => <List key={list.id} listId={list.id} name={list.name} icon={list?.iconId}/>)}
      
    </ul>
  )
}

export default TaskLists