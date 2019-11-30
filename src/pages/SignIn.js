import React from 'react';

import CompanyLayout from '../components/CompanyLayout'
import Registration from '../components/Registration'

import './styles/SignIn.css'

function SignUp(props) {
    return (
        <div className="row">
            <div className="col-4">
                <CompanyLayout />
            </div>
            <div className="col-8 registation">
                <Registration />
                <p className="copyright">&copy; 2019 SVENSON. Todos los derachos reservados</p>
            </div>
        </div>
    );
}

export default SignUp;