import { useEffect, useState } from "react";


function CounterMarkup() {
   
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count+1)
    }

    const sub = () => {
        setCount(count-1)
    }

    useEffect(() => {
        console.log('counter rendered')
    })

    useEffect(() => {

    }, [])

    return <div className='counter'>
    <button onClick={add}>+</button>    
    <div>{count}</div>
    <button onClick={sub}>-</button>
    </div>
}

export default CounterMarkup;