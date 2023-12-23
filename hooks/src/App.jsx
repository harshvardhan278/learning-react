import { useState } from 'react';
import './App.css'

function App() {

  let  [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    if (counter == 20){
      console.log("value can not be bigger than 20");
    }else {
      counter = counter + 1; 
      setCounter(counter);

    }
    
  }

  const removeValue = () => {
    if (counter == 0){
      console.log("value can not be smaller than zero")
    }else {
      counter = counter -1;
      setCounter(counter);
    }
   
  }
  

  return (
    <>
      
     <h1>Chain aur React</h1>
     <h2>Counter value:{counter}</h2>
     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <button
     onClick={removeValue}>Remove Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
