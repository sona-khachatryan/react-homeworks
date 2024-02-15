import { useState } from "react";
import './TodoItem.css'

function TodoItem({todo, markDone, deleteTodo, enterEditMode, saveEdits, cancelEdit}) {

    const [editInputValue, setEditInputValue] = useState(todo.text);

    const handleIsDone = () => {
        markDone(todo.id);
        console.log(todo.isDone);
    }

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    const handleEditMode = () => {
        enterEditMode(todo.id);
    }

    const handleEditinputChange = (e) => {
        setEditInputValue(e.target.value);
    }

    const handleEditSave = () => {
        saveEdits(todo, editInputValue)
    }

    const handleEditCancel = () => {
        cancelEdit(todo.id)
    }
    return <div className='todo-item'>
        <div>
            {todo.isInEditMode ?
            <div>
                <input type='text' value={editInputValue} onChange={handleEditinputChange}/>
                <button onClick={handleEditSave}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
            </div>
            : 
            <>
            <input type='checkbox' checked={todo.isDone} onChange={handleIsDone}/>
            <span className="text">{todo.text}</span>
            <button onClick={handleEditMode}>Edit</button>
            </>}

            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
}

export default TodoItem;