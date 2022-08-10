import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  // stores responses from api
  const [getMessage, setGetMessage] = useState({});

  useEffect(() => (
    axios.get("http://localhost:5000/api").then(response => (
      setGetMessage(response)
    )).catch(error => (
      console.log(error)
    ))
  ), [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {getMessage.status === 200 ? <p>{getMessage.data.message}</p> : <p>LOADING</p>}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
