import { tasks } from "../constants/constants";
import '../TaskItem/TaskItem.css'

const getOptions = (label) => {
    return tasks.reduce((options, task) => {
        if(!options?.includes(task[label])) {
            options.push(task[label]);
        }
        //console.log(options)
        return options;
    }, [])
} 

function SelectOptions({label, selectedOption, handleChange}) {
   return <div className='select-with-label'>
    <label htmlFor={label} className="select-label">{label.replace(label[0], label[0].toUpperCase())}</label>
    <select name={label} id={label} value={selectedOption} onChange={handleChange} className="select-dropdown">
    {getOptions(label).map(option => <option value={option} key={option}>{option.replace(option[0], option[0].toUpperCase())}</option>)}
    </select>
    </div>
}

export default SelectOptions;