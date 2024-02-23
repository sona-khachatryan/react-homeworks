import { useReducer, useEffect, useMemo, useRef, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import Modal from "../Modal/Modal";
import { tasks as defaultTasks, ACTION_TYPES } from "../constants/constants";
import { getTasks } from "../api/getTasks";
import './TaskList.css'

function reducer(currentTasks, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_TASKS:
            return action.value;
        case ACTION_TYPES.DELETE_TASK:
            return currentTasks.filter(task => task.id !== action.id);
        case ACTION_TYPES.CHANGE_STATUS:
            return currentTasks.map(task => {
                if(task.id === action.id) {
                   task.status = action.status;
                }
                return task;
            });
        case ACTION_TYPES.CHANGE_PRIORITY:
            return currentTasks.map(task => {
                if(task.id === action.id) {
                    task.priority = action.priority;
                }
                return task;
            })        
    }
}

function TaskList() {

    const [tasks, dispatch] = useReducer(reducer, [])
    const [ModalIsOpen, setModalIsOpen] = useState(false);

    const statuses = useRef([]);

    useEffect(() => {
        getTasks(defaultTasks).then(response => {
            if(response.status === 'success') {
                dispatch({type:ACTION_TYPES.GET_TASKS, value:response.res})
                statuses.current = response.res.reduce((arr, task) => {
                    if(!arr.includes(task.status)) {
                        arr.push(task.status)
                    }
                    return arr;
                }, [])
            }
        })
    }, []);


    const groupedTasks = useMemo(() => tasks.reduce((grouped, task) => {
        console.log('memo', task)
       if(grouped[task?.status]) {
       // console.log('useMemo', task, task.status)
        grouped[task?.status].push(task);
       } else {
       // console.log('useMemo', task, task.status)
        grouped[task?.status] = [task];
       }
        return grouped;
    }, {}), [tasks])

    const deleteTask = (id) => {
        dispatch({type: ACTION_TYPES.DELETE_TASK, id:id})
    }

    const changeStatus = (id, status) => {
        dispatch({type: ACTION_TYPES.CHANGE_STATUS, id: id, status: status})
    }

    const changePriority = (id, priority) => {
        dispatch({type: ACTION_TYPES.CHANGE_PRIORITY, id: id, priority: priority})
    }

    const onEditClick = () => {
        setModalIsOpen(true);
    }

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }

    return (<>
    <div className='task-container'>
       {statuses.current.map((status) => <div className='task-column'>
        <div className='column-title'>{status}</div>
        {groupedTasks[status]?.map(task => <TaskItem key={task.id}
                                                    task={task}
                                                    deleteTask={deleteTask}
                                                    changeStatus={changeStatus}
                                                    changePriority={changePriority}
                                                    onEditClick={onEditClick}
                                                    />)}
       </div>
       )}
    </div>
    {ModalIsOpen && <Modal handleCloseModal={handleCloseModal}></Modal>}
    </>)
}

export default TaskList;