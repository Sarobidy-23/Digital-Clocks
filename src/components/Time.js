import React, {useState, useEffect} from 'react'

export default function Time() {

  const [time, setTimeur] = useState(0);
  const [minutes, setMinutes] = useState();
  const [seconde, setSeconde] = useState();
  const [count, setCount] = useState(1);

  function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }
  
  const minutesValue = (e) => {
     setMinutes((parseInt(e.target.value) * 60));       
  }

  const secondeValue = (e) => {
    setSeconde(parseInt(e.target.value)); 
  }

  const Start = (event) => {
    if(isNaN(minutes+seconde) !== true && minutes<=3540 && seconde<=59){
      setTimeur(minutes + seconde);
      setCount(0)
    }
    else{
      alert("Vérifier vos données d'entré ! ")
    }
    event.preventDefault();
  }

  const Stop = (event) => {
    setTimeur(0);
    event.preventDefault();
  }

  useEffect(() => {
    
    let timerId = setInterval(() => {
      if(time===0){
        return () => clearInterval(timerId);
      }
       setTimeur(time => time-1)
      
     }, 1000);
     
     return () => clearInterval(timerId);
    });

  if(time===0 && count===0){
    setCount(count => count+1);
    alert("Temps écouler");
  }


  return (
    <>
      <div className='form'>
        <input type="text" placeholder='min' id="minutes" onChange={minutesValue}/> 
        <span className='separated'> : </span> 
        <input type="text" placeholder='sec' id="secondes" onChange={secondeValue}/>
        <div id="result">{`${padStartDigit(Math.floor((time % 3600)/60))} : ${padStartDigit(time%60)}`}</div>
        <div onClick={Start} id="Start">Start</div>
        <div onClick={Stop} id="Stop">Stop</div>
      </div>
    </>
  )
}
