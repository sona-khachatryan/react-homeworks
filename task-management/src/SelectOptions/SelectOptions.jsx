import { tasks } from "../constants/constants";

const getOptions = (label) => {
    return tasks.reduce((options, task) => {
        if(!options?.includes(task[label])) {
            options.push(task[label]);
        }
        //console.log(options)
        return options;
    }, [])
} 

function SelectOptions({label, selectedOption, handleStatusChange}) {
   return <>
    <label htmlFor={label}>{label}</label>
    <select name={label} id={label} value={selectedOption} onChange={handleStatusChange}>
    {getOptions(label).map(option => <option value={option}>{option}</option>)}
    </select>
    </>
}

export default SelectOptions;