import React from 'react';
import './css/TodoInput.css';
import TodoList from './TodoList';

class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tarefa: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            tarefa: event.target.value
        });
    }

    handleClick(e){
        console.log(this.state.tarefa)
        e.preventDefault();
    }

    render(){
        return(
            <div className="TodoInput">
            <label>Tarefa:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <button type="submit" onClick={this.handleClick}>Adicionar Tarefa</button>

            <div className="TodoList">
                <TodoList tarefa={this.state.tarefa}/>
            </div>
            </div>
        );
    }
}
export default TodoInput;