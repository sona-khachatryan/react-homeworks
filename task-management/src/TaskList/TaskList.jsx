import { useReducer, useEffect, useMemo, useRef, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import Modal from "../Modal/Modal";
import EditMode from '../EditMode/EditMode';
import { tasks as defaultTasks, ACTION_TYPES } from "../constants/constants";
import { getTasks } from "../api/getTasks";
import './TaskList.css'

function reducer(currentTasks, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_TASKS:
            return action.value;
        case ACTION_TYPES.DELETE_TASK:
            return currentTasks.filter(task => task.id !== action.id);
        case ACTION_TYPES.CHANGE_SELECT:
            return currentTasks.map(task => {
                if(task.id === action.id) {
                    task[action.label] = action.value;
                }
                return task;
            }); 
        case ACTION_TYPES.SAVE_EDITS:
            return currentTasks.map(task => {
                if(task.id === action.id) {
                    task.title = action.title;
                    task.description = action.description;
                    task.assignee = action.assignee;
                }
                return task;
            })                
    }
}

function TaskList() {

    const [tasks, dispatch] = useReducer(reducer, [])
    const [ModalIsOpen, setModalIsOpen] = useState(false);
    const [currentlyInEditMode, setcurrentlyInEditMode] =  useState({});

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

    const changeSelect = (id, label, value) => {
        dispatch({type: ACTION_TYPES.CHANGE_SELECT, id: id, label: label, value: value})
    }

    const onEditClick = (id) => {
        setModalIsOpen(true);
        setcurrentlyInEditMode(tasks.find(task => task.id===id))
    }

    const onEditSave = (id, title, assignee, description) => {
        dispatch({type: ACTION_TYPES.SAVE_EDITS, id: id, title: title, assignee: assignee, description: description})
        setModalIsOpen(false);
    }

    const onEditCancel = () => {
        setModalIsOpen(false);
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
                                                    changeSelect={changeSelect}
                                                    onEditClick={onEditClick}
                                                    
                                                    />)}
       </div>
       )}
    </div>
    {ModalIsOpen && <Modal handleCloseModal={handleCloseModal}>
        <EditMode currentTask={currentlyInEditMode}
                  changeSelect={changeSelect}
                  onEditSave={onEditSave}
                  onEditCancel={onEditCancel}/>
        </Modal>}
    </>)
}

export default TaskList;