function TodoFooter({todos, deleteAll, deleteCompleted}) {
   
    const completed = todos.filter(todo => todo.isDone === true);   
   return <div className='todo-footer'>
    <div className="title"> Completed {completed.length}/{todos.length}</div>
    {todos.length > 0 && <div><button onClick={deleteAll}>Delete All</button>
                           <button onClick={deleteCompleted}>Delete Completed</button>
                         </div>}
    </div>
}

export default TodoFooter;