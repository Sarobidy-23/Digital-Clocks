import React, {useState, useEffect} from 'react'

export default function Time() {

  const [time, setTimeur] = useState(0);
  const [hour, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [seconde, setSeconde] = useState();
  const [count, setCount] = useState(1);

  function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }
  
  const hourValue = (e) => {
    setHour(parseInt(e.target.value) * 3600); 
  }

  const minutesValue = (e) => {
     setMinutes((parseInt(e.target.value) * 60));       
  }

  const secondeValue = (e) => {
    setSeconde(parseInt(e.target.value)); 
  }

  const Start = (event) => {
    if(isNaN(minutes + seconde + hour) !== true && 0<=hour && hour<=86400 && 0<=minutes && minutes<=3540 && 0<=seconde && seconde<=59 && (hour+minutes+seconde)<=86400){
      setTimeur(minutes + seconde + hour);
      setCount(0)
    }
    else{
      alert("Check your input ! ")
    }
  }

  const Stop = (event) => {
    setTimeur(0);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      if(time===0){
        return () => clearInterval(timerId);
      }
       setTimeur(time => time-1)
      
     }, 1000);
     
     if(time===0 && count===0){
      setCount(count => count+1);
      alert("Time out !");}
     return () => clearInterval(timerId);
     
    });


  return (
    <>
      <div className='form'>
        <input type="number" placeholder='hour' id="hour" onChange={hourValue}/>
        <span className='separated'> : </span> 
        <input type="number" placeholder='min' id="minutes" onChange={minutesValue}/> 
        <span className='separated'> : </span> 
        <input type="number" placeholder='sec' id="secondes" onChange={secondeValue}/> 
        <div id="result">{`${padStartDigit(Math.floor(time/3600))} : ${padStartDigit(Math.floor((time%3600)/60))} : ${padStartDigit(time%60)}`}</div>
        <div onClick={Start} id="Start">Start</div>
        <div onClick={Stop} id="Stop">Stop</div>
      </div>
    </>
  )
}
