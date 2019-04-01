import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const jobs = [
      {id: 1, isActive: true},
      {id: 2, isActive: true},
      {id: 3, isActive: false},
    ]

   const activeJobs2 = jobs.filter(function(job) { return job.isActive;});
   const activeJobs = jobs.filter( job => job.isActive);

      setTimeout (() => {console.log(this)}, 1000);
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
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
