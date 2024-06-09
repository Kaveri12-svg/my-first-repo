// import react, {useEffect} from 'react'

// const CounterApp = ({count, setCount}) => {

//     const handleIncrement = () => {
//         setCount(count + 1)
//         // count = count + 1;
//         // console.log(count)
//        }
      
//        const handleDecrement = () => {
//         setCount(count - 1)
//        }
      
//        const handleReset = () => {
//         setCount(0)
//        }
//        useEffect(() => {
//         console.log(`Count has changed to: ${count}`);
//       }, [count]);
//     return (
//         <div>
//             <h2>You have clicked {count}</h2>
//             <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset} >Reset</button>
            
//         </div>
//     )
// }

// export default CounterApp;

import React, { useState, useEffect } from 'react';

function CounterApp() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleanup executed');
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default CounterApp;
