import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function useIncrement(initial, step){
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    setCounter(c => c + step)
  }

  return [counter, increment]
}

function Compteur(){
  const [counter, increment] = useIncrement(0,2)

  useEffect(() => {
    document.title = 'Compteur'+ counter
  },[counter]);

  return <div>
    <button onClick={increment}>Compteur = {counter}</button>
  </div>
}

function Timer(){
  const [counter, increment] = useIncrement(0,1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      increment()
    },1000)
    return () =>{
      clearInterval(timer)
    }
  },[]);

  return <div>
    Timer = {counter}
  </div>
}

function App() {
  return (
    <div >
      <Compteur></Compteur>
      <Timer></Timer>
    </div>
  );
}

export default App;
