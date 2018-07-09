import React, { Component } from 'react';

class Formulario extends Component 
{

	constructor(){
 		super();
 		this.state={
 			title:'',
 			responsable:'',
 			Descripcion:'',
 			Prioridad:'Baja'
 		}
 		this.handleInput=this.handleInput.bind(this);
 		this.handleSubmit=this.handleSubmit.bind(this);
	}


	handleInput(e){
		console.log(e.target.name)
		const {value,name} = e.target;
		this.setState({
			[name]:value
		})
		
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAddtodo(this.state);
		console.log('datos');
		console.log(this.state)
	}


	render(){

		return(
				<div className="card">
				<form className="card-body" onSubmit={this.handleSubmit}>
					<div className="fourm-group">
					    <input
					    type="text"
					    name="title"
					    onChange={this.handleInput}
					    className="form-control mb-2"
					    placeholder="titulo"
					    />
					</div>
					<div className="fourm-group">
					    <input
					    type="text"
					    name="responsable"
					    onChange={this.handleInput}
					    className="form-control mb-2"
					    placeholder="responsable"
					    />
					</div>
					<div className="fourm-group">
					    <input
					    type="text"
					    name="Descripcion"
					    onChange={this.handleInput}
					    className="form-control mb-2"
					    placeholder="descripcion"
					    />
					</div>
					<div className="fourm-group">
					    <select className="form-control mb-2" name="Prioridad">
						    <option>Baja</option>
						    <option>Media</option>
						    <option>Alta</option>
					    </select>
					</div>
					<button type="submit" className="btn btn-primary">Agregar</button>
				</form>
				</div>
			)
	}


}
export default Formulario;