import React from 'react';
import './css/TodoInput.css';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="TodoList">
                <p>
                Lista de Tarefas
                </p>

                <div className="TodoItems">
                    {this.props.tarefa}
                </div>
            </div>
        );
    }
}

export default TodoList;