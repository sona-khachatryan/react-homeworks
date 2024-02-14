function TodoFooter({todos, deleteAll, deleteCompleted}) {
   
    const completed = todos.filter(todo => todo.isDone === true);   
   return <>
    <div> Completed {completed.length}/{todos.length}</div>
    {todos.length > 0 && <><button onClick={deleteAll}>Delete All</button>
                           <button onClick={deleteCompleted}>Delete Completed</button>
                         </>}
    </>
}

export default TodoFooter;