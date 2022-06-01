import React, {useState, useEffect} from 'react'

export function Clock() {
    const [date, setDate] = useState(new Date());
  
    function padStartDigit(digit) {
      return digit.toString().padStart(2, "0");
    }
  
    useEffect(() => {
     const timerId = setInterval(() => {
        setDate(new Date());
      }, 1000);
  
      return () => clearInterval(timerId);
    });

  
    return (
      <>
      <div className="clock">
        <span>{padStartDigit(date.getHours())}: </span>
        <span>{padStartDigit(date.getMinutes())}: </span>
        <span>{padStartDigit(date.getSeconds())}</span>
      </div>
      
      </>
    );
  }
  export default Clock;
