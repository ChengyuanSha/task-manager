import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"



function App() {
	// global states, can be used in other components 
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text:'Doctor',
			day: 'Feb 5',
			reminder: true,
		},
    {
			id: 2,
			text:'Meeting',
			day: 'Feb 6',
			reminder: true,
		},
    {
			id: 3,
			text:'Food',
			day: 'Feb 7',
			reminder: true,
		}
  ])

  // delete task
  const deleteTask = (id) => {
	  setTasks(tasks.filter((task) => task.id !== id))
	  // console.log('delete', id)
  }

	// Toggle Reminder 
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
		// console.log(id)
	}


  return (
    <div className="container">
      <Header/>
			{tasks.length > 0 ? 
			(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
			: ('No task to show')}      
    </div>
  );
}

export default App;
