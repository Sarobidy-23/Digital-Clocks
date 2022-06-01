import React, {useState} from 'react'
import './App.css';
import Timeur from './components/Time';
import Clock from './components/Clock';


function App() {
  const [alter, useAlter] = useState(true);

const Change = (event) => {
  event.preventDefault();
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
  balise = <Timeur/>;
}
   return (
   <>
     <div onClick={Change} id="Change">{label}</div>
     {balise}

   </>
  );
}

export default App;