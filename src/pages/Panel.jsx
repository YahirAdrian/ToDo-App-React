import React, {useState} from 'react'
import PanelHeader from '../components/PanelHeader'
import Tasks from '../components/Tasks'
import AddTaskBar from '../components/AddTaskBar'
import Login from '../components/Login'
import { useLoaderData, useActionData } from 'react-router-dom'

export function loader(){
  const userData = localStorage.getItem('user-data');
  if(userData){
    return userData;
  }
  return null;
}

export async function action({request, params}){
  
  const data = await request.formData();
  const userName = data.get('userName');
  if(userName){
    const newUser = { 
      userName,
      lists: [
        {
          id: 'list-1',
          name: 'Tareas',
          iconId: '1'
        }
       ],
      tasks: []
    }
    localStorage.setItem('user-data', JSON.stringify(newUser));
  }
  return null;
}

function Panel() {
  const [taskBarActive, setTaskBarActive] = useState(false);

  const  openTaskBar = () => {
    const taskBar = document.querySelector('.addTasks');
    
    if(taskBarActive){
      //If the task bar is not active,
      taskBar.style.transform ='translateY(0)';
      taskBar.style.display = 'block';
      setTaskBarActive(taskBarActive ? false : true)
      
    }else{
      taskBar.style.transform ='translateY(100%)';
      taskBar.style.display = 'none';
      setTaskBarActive(taskBarActive ? false : true)
  
    }
  }

  const userData = JSON.parse(useLoaderData());
  const request = useActionData();
  return (
    <>

      {userData !== null && Object.keys(userData).length !== 0 ? 
        <>
          <PanelHeader data={userData}>My ToDo</PanelHeader>
          <Tasks tasks={userData} openTaskBar={openTaskBar} userData={userData}/> 
          <AddTaskBar openTaskBar={openTaskBar} tasks={userData.tasks} userData={userData}/>
        </>: 
        <Login />
      }
      
    </>
  )
}

export default Panel
