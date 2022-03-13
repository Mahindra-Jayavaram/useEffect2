// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Stopwatch} from "./components/Stopwatch"

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
        {show ? <Stopwatch/> : "" }

        <button onClick={ ()=>{
          setShow(!show);
        }}>

        {show ? "Hide Timer" : "Show Timer"}

        </button>
    </div>
  );
}

export default App;
