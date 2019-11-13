import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class App extends Component {
  

  render() {
    return (
      <div>
        <div className="App">
          <h2>Welcome to Trivial Game!</h2>
          <Link to='/question/1'>
            <button>START</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
