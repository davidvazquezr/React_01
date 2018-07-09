import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
import Formulario from './Componentes/Formulario.js'



class App extends Component 
{

    constructor(){
      super();
        this.state = {
                       todos
                     }

        this.handleAddTodo=this.handleAddTodo.bind(this)
    }


    handleAddTodo(todo){
        this.setState({
          todos:[...this.state.todos, todo]
        }) 
    }


    handleRemove(index){

      this.setState({
          todos:this.state.todos.filter((e,i)=>{
            return i!==index;
          })

      })
      console.log(index);

    }

  render() {

   const todos = this.state.todos.map((todo,i) => {
      return(
          <div className="col-md-4" key={i}>
              <div className="card mt-4">
                <div className="card-header">
                  <h3>{todo.title}</h3>
                  <span className="badge badge-pill badge-danger ml-2">{todo.Prioridad}</span>
                </div>
                <div className="card-body">
                  <p>{todo.Descripcion}</p>
                  <p>{todo.responsable}</p>
                </div>
                <div className="card-footer">
                <button className="btn btn-danger"
                onClick={this.handleRemove.bind(this,i)}>
 
                Eliminar
                </button>
                </div>
              </div>
            </div>
      )
   });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">Task
            <span className="badge badge-pill badge-danger ml-2  badge-light">{this.state.todos.length}</span>
          </a>

        </nav>
        <div className="container">
          <div className="row mt-4">
              <div className="col-md-3">
                <img src={logo} className="App-logo" alt="logo" />
                <Formulario  onAddtodo={this.handleAddTodo}/>
              </div> 

              <div className="col-md-9">
                  <div className="row mt-4">
                  {todos}
                  </div>
              </div>
          </div> 
        </div>     
            
      </div>
    );
  }
}

export default App;
