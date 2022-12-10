import '../App.css';
import { useState, useEffect } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('UseEffect');
        setInterval(() => {
            
            setNumber((n)=> n+1)

        },1000)
    }, [])

    useEffect(() => {
        console.log('Number is Change');
    }, [number])
    return (
        <div>
            {number}

            <button onClick={() => setNumber(number + 1)} >Click</button>

        </div>
    )
}

export default Counter