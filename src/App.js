import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: '5th January 2022',
                reminder: false
            },
            {
                id: 2,
                text: 'Meeting with Chikoo',
                day: '28th December 2021',
                reminder: true
            },
            {
                id: 3,
                text: 'Talk with Dad',
                day: '15th February 2022',
                reminder: true
            }
        ]
    )
    
    // Delete a Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) =>
            task.id !== id
        ))
    }

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? {...task, reminder: !task.reminder} : task
            )
        )
    }

    // Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }
  
    return (
    <div className='container'>
        <Header 
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
        />
        { showAddTask && <AddTask onAdd={addTask}/>}
        {
            tasks.length > 0 ? <Tasks 
                tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Hurray, no tasks!'
        }
    </div>
  );
}

export default App;