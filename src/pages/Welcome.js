import React from 'react';

import CompanyLayout from '../components/CompanyLayout'

function Welcome(props) {
    return (
        <div className="row">
            <div className="col-4">
                <CompanyLayout />
            </div>
            <div className="col-8">
                <h1>Hola!! Bienvenido</h1>
            </div>
        </div>
    );
}

export default Welcome;