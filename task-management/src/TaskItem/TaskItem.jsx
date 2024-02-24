import SelectOptions from "../SelectOptions/SelectOptions";
import './TaskItem.css'

function TaskItem({task, deleteTask, changeSelect, onEditClick}) {

    const handleDelete = () => {
        deleteTask(task.id)
    }

    const handleChangeStatus = (e) => {
        changeSelect(task.id, 'status', e.target.value)
    }

    const handleChangePriority = (e) => {
        changeSelect(task.id, 'priority', e.target.value)
    }

    const handleEditClick = () => {
        onEditClick(task.id);
    }
    

    return <div className={`task-item ${task.status}`}>
        <div className='task-title'>{task.title}</div>
        <div className='task-description'>{task.description}</div>
        <div className='task-assignee'>{task.assignee}</div>
        <div className='select-container'>
        <SelectOptions label='status' selectedOption={task.status} handleChange={handleChangeStatus}/>
        <SelectOptions label='priority' selectedOption={task.priority} handleChange={handleChangePriority}/>
        </div>
        <button onClick={handleDelete} className='delete-btn'>X</button>
        <button onClick={handleEditClick} className='edit-btn'>Edit</button>
       
    </div>
}

export default TaskItem;

// { status: 'backlog', 
// assignee: 'Hannah', 
// title: 'Task 1', 
// description: 'Review and update project documentation.', 
// priority: 'high' }