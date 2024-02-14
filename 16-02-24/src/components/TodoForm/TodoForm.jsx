import { useState } from "react";

function TodoForm({addTodo}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleInputChange}/>
        <button>Add</button>
    </form>
}

export default TodoForm;