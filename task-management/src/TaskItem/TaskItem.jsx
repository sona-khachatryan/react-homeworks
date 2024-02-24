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
    

    return <div className='task-item'>
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>{task.assignee}</div>
        <SelectOptions label='status' selectedOption={task.status} handleChange={handleChangeStatus}/>
        <SelectOptions label='priority' selectedOption={task.priority} handleChange={handleChangePriority}/>
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