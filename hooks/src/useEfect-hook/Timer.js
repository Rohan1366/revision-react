import React from 'react'
import { useState  } from 'react'
import { useEffect } from 'react'
const Timer = () => {
    const [counter, setCounter] = useState(0);
    const [startcounter, setStartcounter] = useState(false);
    const [timerCheck, setTimerCheck] = useState(0);
  
    useEffect(() => {
      let intervalStart = null;
      if (startcounter) {
        intervalStart = setInterval(() => {
          setCounter((prevState) => (prevState += 1));
        }, 1000);
        setTimerCheck(intervalStart);
      } else {
        clearInterval(timerCheck);
      }
  
      return () => {
        if (counter !== 0) clearInterval(timerCheck);
      };
    }, [startcounter]);
  
    const handleStartButton = () => {
      setStartcounter(true);
    };
  
    const handleStopButton = () => {
      setStartcounter(false);
      setCounter(0)
    };
  return (
    <div style={{textAlign:"center"}} >
        <h3>Time is {counter}</h3>
        <button onClick={handleStartButton}>Start</button>
        <button onClick={handleStopButton}>Stop</button>
    </div>
  )
}

export default Timer