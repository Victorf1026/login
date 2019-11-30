import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './styles/Registration.css'

import { auth } from '../firebase';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    error: null,
  };
  
class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {...INITIAL_STATE}
    }

    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // })
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        const { email, password } = this.state
        
        auth.doCreateUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                this.setState({ ...INITIAL_STATE })
                alert('Usuario registrado :D')
                // this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ error })
            })
        
        e.preventDefault()
    }


    render() {
        const isInvalid = this.state.password === '' || 
            this.state.name === ''||
            this.state.email === '';

        return (
            <div className="container-form">
                <div className="text-center">
                    <h2>Crea tu Cuenta</h2>
                    <p className="mt-3 mb-5">Ingresa tus datos para continuar</p>
                </div>
                <div className="inputs-form">
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="md-form">
                            <label htmlFor="inputPlaceholderEx">Nombre</label>
                            <input 
                                placeholder="Víctor Octavio Torres Jiménez" 
                                type="text" id="inputPlaceholderEx" 
                                className="form-control"
                                name="name"  
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <label htmlFor="inputPlaceholderEx">Correo electrónico</label>
                            <input 
                                placeholder="correo@ejemplo.com" 
                                type="text" id="inputPlaceholderEx" 
                                className="form-control"
                                name="email"  
                                onChange={this.handleChange}
                                value={this.state.email}
                            />

                            <label htmlFor="inputPlaceholderEx">Contraseña</label>
                            <input 
                                placeholder="........" 
                                type="password" id="inputPlaceholderEx" 
                                className="form-control"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>

                        <div className="text-center">
                            <Link className="text-decoration-none" to="/">¿Ya tienes cuenta? Iniciar sesión</Link> <br/> <br/>

                            <button disabled={isInvalid} className="btn btn-dark">Registrar</button>

                            <div className="pt-1 text-danger">
                                { this.state.error && <p >{this.state.error.message}</p> }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;