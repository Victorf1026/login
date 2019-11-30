import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase'

import './styles/Login.css'

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {...INITIAL_STATE}
    }

    handleChange = (e) => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // })
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit =  e => {
        e.preventDefault()

        const { email, password } = this.state

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE})
                alert('Genial!! has iniciado sesión')
                // this.props.history.push('/welcome')
            })
            .catch(error => {
                this.setState({ error })
            })
    }


    render() {

        const isInvalid = this.state.password === '' || this.state.email === '';

        return (
            <div className="container-form">
                <div className="text-center">
                    <h2>Accede a tu Cuenta</h2>
                    <p className="mt-3 mb-5">Ingresa tus datos para continuar</p>
                </div>
                <div className="inputs-form">
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="md-form">
                            <label htlmFor="inputPlaceholderEx">Correo electrónico</label>
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
                            <Link className="text-decoration-none" to="/">¿Olvidaste tu contraseña?</Link> 
                            <Link  className="text-decoration-none" to="/signin">  ¿No tienes cuenta? Creala!</Link> <br/> <br/>

                            <button disabled={isInvalid} className="btn btn-dark">Ingresar</button>
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

export default Login;