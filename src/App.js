import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoInput from './TodoInput';

class App extends Component {
  render() {
    return (
      <div className="ToDoApp">
      <TodoBanner/>
      <TodoInput/>
      </div>
    );
  }
}

export default App;
