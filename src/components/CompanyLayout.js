import React from 'react';

import './styles/CompanyLayout.css'

import Logo from '../images/svenson-white.png'
import Person from '../images/svenosn.png'

function CompanyLayout(props) {
    return (
        <div className="backgroud-layaout">
           <div className="logo">
               <img className="img-fluid" src={Logo} alt="Logo"/>
           </div>
           <div className="person">
               <img className="img-fluid" src={Person} alt=""/>
           </div>
        </div>
    );
}

export default CompanyLayout;