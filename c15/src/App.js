import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function useIncrement(initial, step){
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    setCounter(c => c + step)
  }

  return [counter, increment]
}

function Compteur(){
  const [counter, increment] = useIncrement(0,2)
  return <div>
    <button onClick={increment}>Compteur = {counter}</button>
  </div>
}

function App() {
  return (
    <div >
      <Compteur></Compteur>
    </div>
  );
}

export default App;
