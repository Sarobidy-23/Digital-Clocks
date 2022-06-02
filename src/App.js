import React, {useState} from 'react'
import './App.css';
import Time from './components/Time';
import Clock from './components/Clock';


function App() {
  const [alter, useAlter] = useState(true);

const Change = (event) => {
  useAlter(!alter);
}

let label;
let balise;
if(alter){
  label = "Time"
  balise = <Clock/>;
}
else{
  label = "Clock"
  balise = <Time/>;
}
   return (
   <>
     <div onClick={Change} id="Change">{label}</div>
     {balise}

   </>
  );
}

export default App;