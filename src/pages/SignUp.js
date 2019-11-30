import React from 'react';

import CompanyLayout from '../components/CompanyLayout'
import Login from '../components/Login'

import './styles/SignUp.css'

function SignUp(props) {
    return (
        <div className="row">
            <div className="col-4">
                <CompanyLayout />
            </div>
            <div className="col-8 login">
                <Login />
                <p className="copyright">&copy; 2019 SVENSON. Todos los derachos reservados</p>
            </div>
        </div>
    );
}

export default SignUp;