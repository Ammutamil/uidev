import React, {useState}from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
setCount(count+1);
    }
    const decrementCounter = () => {
        setCount(count-1);
    }
return(
    <>
    <h1>Counter</h1>
    <div>{count}</div>
    <button onClick={incrementCounter}>Increment counter</button>
    <button onClick={decrementCounter}>Decrement counter</button>
    </>
)
}
export default Counter;