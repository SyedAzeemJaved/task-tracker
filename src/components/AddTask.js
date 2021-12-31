import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [task, setTask] = useState(''); 
    const [day, setDay] = useState(''); 
    const [reminder, setReminder] = useState(false); 

    const onSubmit = (e) => {
        e.preventDefault()

        if (!task) {
            alert('Please add a task.')
            return
        }

        onAdd({ text: task, day: day, reminder: reminder })

        setTask('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text'
                    placeholder='Add task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input 
                    type='text'
                    placeholder='Add day and time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input
                className='btn btn-block' 
                type='submit' value='Save Task'
            />
        </form>
    )
}

export default AddTask
