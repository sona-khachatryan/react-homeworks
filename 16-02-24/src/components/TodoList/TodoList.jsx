import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import TodoFooter from "../TodoFooter/TodoFooter";
import './TodoList.css';

const defaultTodoList = [
    {id: Math.random(),
    text: 'Learn React',
    isDone: false,
    isInEditMode: false,
    },
    {id: Math.random(),
    text: 'Learn CSS',
    isDone: false,
    isInEditMode: false,
    },
    {id: Math.random(),
    text: 'Learn JS',
    isDone: false,
    isInEditMode: false,
    }
]


function TodoList() {
    const [todos, setTodos] = useState(defaultTodoList);

    const addTodo = (text) => {
        setTodos([...todos, {id: Math.random(), text: text, isDone: false,
            isInEditMode: false}])
    }

    const markDone = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        }))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const enterEditMode = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.isInEditMode = true;
            }
            return todo;
        }))
    }

    const saveEdits = (item, value) => {
        setTodos(todos.map(todo => {
            if(item.id===todo.id) {
                todo.text = value;
                todo.isInEditMode = false;
            }
            return todo;
        }))
    }

    const cancelEdit = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.isInEditMode = false;
            }
            return todo;
        }))
    }

    const deleteAll = () => {
        setTodos([]);
    }

    const deleteCompleted = () => {
        setTodos(todos.filter(todo => todo.isDone === false));
    }

    return <div className='todo-container'>
    <TodoForm addTodo={addTodo}/>
    <div className="title">To be done</div>
    {todos.filter(todo => todo.isDone === false).map(todo => 
    <TodoItem key={todo.id}
              todo={todo}
              markDone={markDone}
              deleteTodo={deleteTodo}
              enterEditMode={enterEditMode}
              saveEdits={saveEdits}
              cancelEdit={cancelEdit}
              />)}
    <div className="title">Done</div>  
    {todos.filter(todo => todo.isDone === true).map(todo => 
    <TodoItem key={todo.id}
              todo={todo}
              markDone={markDone}
              deleteTodo={deleteTodo}
              enterEditMode={enterEditMode}
              saveEdits={saveEdits}
              cancelEdit={cancelEdit}
              />)}
    <TodoFooter todos={todos} deleteAll={deleteAll} deleteCompleted={deleteCompleted}/>          
              
    </div>
}

export default TodoList;