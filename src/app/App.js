import React from 'react';
// import AppLogo from '../assets/react-logo.svg';
import './App.css';

const App = props => (
  // <div className="App">
  //   <header className="App-header">
  //     <h1>PlanetSide MeritViewer</h1>
  //     <img src={AppLogo} className="App-logo" alt="logo" />
  //     <p>Edit <code>src/App.js</code> and save to reload.</p>
  //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
  //   </header>
  // </div>
  <React.Fragment>
    { props.children }
  </React.Fragment>
);

export default App;
