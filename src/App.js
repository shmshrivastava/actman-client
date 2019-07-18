import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stubber from './Stubber';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {props.hello}
          <Stubber {...props}  onChange={function(){console.log("clicked onchange");}} onClick={function(){console.log("clicked");}} id="test" />
        </a>
      </header>
    </div>
  );
}

export default App;
