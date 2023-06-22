import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PanelHeader from '../components/PanelHeader';
import Tasks from '../components/Tasks';

export function loader({params}){

  const data = JSON.parse(localStorage.getItem('user-data'));
  const currentList = data.lists.filter(list => list.id === params.listId);
  return currentList[0];
}


function List() {
  
  const list = useLoaderData();
  const {id, name} = list;
  return (
    <div>
      <PanelHeader listName={name} listData={list}/>

      <Tasks listId={id}/>
    </div>
  )
}

export default List
