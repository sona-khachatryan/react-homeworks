import SelectOptions from "../SelectOptions/SelectOptions";
import './TaskItem.css'

function TaskItem({task, deleteTask, changeStatus, changePriority, onEditClick}) {

    const handleDelete = () => {
        deleteTask(task.id)
    }

    const handleStatusChange = (e) => {
        changeStatus(task.id, e.target.value)
    }

    const handleChangePriority = (e) => {
        changePriority(task.id, e.target.value)
    }

    const handleEditClick = () => {
        onEditClick();
    }

    return <div className='task-item'>
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>{task.assignee}</div>
        <SelectOptions label='status' selectedOption={task.status} handleStatusChange={handleStatusChange}/>
        <SelectOptions label='priority' selectedOption={task.priority} handleChangePriority={handleChangePriority}/>
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