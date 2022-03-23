import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";


function App() {
	// global states, can be used in other components 
	const [showAddTask, setShowAddTask] = useState(false)
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
 
	// add task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = {id, ...task}
		setTasks([...tasks, newTask])
		// console.log(task)
	}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? 
			(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
			: ('No task to show')}      
    </div>
  );
}

export default App;
