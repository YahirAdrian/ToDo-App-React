import React from 'react'
import PanelHeader from '../components/PanelHeader'
import Tasks from '../components/Tasks'
import AddTaskBar from '../components/AddTaskBar'
function Panel() {
  return (
    <>
      <PanelHeader />
      <Tasks />
      <AddTaskBar />
    </>
  )
}

export default Panel
