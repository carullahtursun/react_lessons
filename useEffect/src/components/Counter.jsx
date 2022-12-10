import '../App.css';
import { useState, useEffect } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('UseEffect');
     const interval=setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

        return ()=> clearInterval(interval) 
    }, [])

    useEffect(() => {
        console.log('Number is Change');
    }, [number])
    return (
        <div>
            {number}
            <br />
            <button onClick={() => setNumber(number + 1)} >Click</button>

        </div>
    )
}

export default Counter