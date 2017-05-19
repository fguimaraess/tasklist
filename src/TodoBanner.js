import React from 'react';
import logo from './logo.png';
import './css/TodoBanner.css';

class TodoBanner extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lista de Tarefas</h2>
        </div>
        <p></p>
      </div>
    );
  }
}

export default TodoBanner;