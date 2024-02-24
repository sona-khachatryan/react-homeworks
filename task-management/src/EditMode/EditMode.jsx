import { useState } from "react";
import SelectOptions from "../SelectOptions/SelectOptions";

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

    return <div>
        <div>Title</div>
        <input type='text' value={titleInputValue} onChange={(e) => setTitleInputValue(e.target.value)}/>
        <div>Description</div>
        <input type='text' value={descriptionInputValue} onChange={(e) => setDescriptionInputValue(e.target.value)}/>
        <div>Assignee</div>
        <input type='text' value={assigneeInputValue} onChange={(e) => setAssigneeInputValue(e.target.value)}/>
        <SelectOptions label='status' selectedOption={currentStatusValue} handleChange={(handleChangeStatus)}/>
        <SelectOptions label='priority' selectedOption={currentPriorityValue} handleChange={handleChangePriority}/>  
        <button onClick={handleEditSave}>Save</button>
        <button onClick={handleEditCancel}>Cancel</button> 
    </div>
}

export default EditMode;