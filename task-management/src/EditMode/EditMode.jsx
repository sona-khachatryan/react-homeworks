import { useState } from "react";
import SelectOptions from "../SelectOptions/SelectOptions";
import './EditMode.css'

function EditMode({currentTask, changeSelect, onEditSave, onEditCancel}) {

    const [titleInputValue, setTitleInputValue] = useState(currentTask.title);
    const [descriptionInputValue, setDescriptionInputValue] = useState(currentTask.description);
    const [assigneeInputValue, setAssigneeInputValue] = useState(currentTask.assignee)
    const [currentStatusValue, setCurrentStatusValue] = useState(currentTask.status)
    const [currentPriorityValue, setCurrentPriorityValue] = useState(currentTask.priority)
    
    const handleChangeStatus = (e) => {
        setCurrentStatusValue(e.target.value)
    }

    const handleChangePriority = (e) => {
        setCurrentPriorityValue(e.target.value)
    }

    const handleEditSave = () => {
        onEditSave(currentTask.id, titleInputValue, assigneeInputValue, descriptionInputValue);
        changeSelect(currentTask.id, 'status', currentStatusValue);
        changeSelect(currentTask.id, 'priority', currentPriorityValue);
    }

    const handleEditCancel = () => {
        onEditCancel()
    }

    return <div className='edit-mode-container'>
        <div className='edit-mode-labels'>Title</div>
        <input className='edit-input' type='text' value={titleInputValue} onChange={(e) => setTitleInputValue(e.target.value)}/>
        <div className='edit-mode-labels'>Description</div>
        <input className='edit-input description-box' type='text' value={descriptionInputValue} onChange={(e) => setDescriptionInputValue(e.target.value)}/>
        <div className='edit-mode-labels'>Assignee</div>
        <input className='edit-input' type='text' value={assigneeInputValue} onChange={(e) => setAssigneeInputValue(e.target.value)}/>
        <div className='edit-mode-select-container'>
        <SelectOptions label='status' selectedOption={currentStatusValue} handleChange={(handleChangeStatus)}/>
        <SelectOptions label='priority' selectedOption={currentPriorityValue} handleChange={handleChangePriority}/>  
        </div>
        <div className="edit-mode-btn-container">
        <button className='edit-mode-btns' onClick={handleEditSave}>Save</button>
        <button className='edit-mode-btns' onClick={handleEditCancel}>Cancel</button> 
        </div>
    </div>
}

export default EditMode;