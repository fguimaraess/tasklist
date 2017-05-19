import React from 'react';
import './css/TodoInput.css';

class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tarefa: "1"
        }
    }
    
    criaTarefa(){
        console.log("Traz o valor preenchido");

    }
    
    render(){

        return(
            <div className="TodoInput">
            <input id="tarefa-field" ref="myTarefa" type="text" placeholder="Digite a tarefa"/>
            <button type="submit" onClick={this.criaTarefa}>Criar Tarefa</button>
            </div>
        );
    }
}
export default TodoInput;