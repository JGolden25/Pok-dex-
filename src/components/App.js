import React, { Component } from 'react';
import './styles/App.css';
import NavBar from '../components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;