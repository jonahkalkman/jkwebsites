import React, { Component } from 'react';
import Router from './components/Router/Router';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      authUser: null
    }
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
