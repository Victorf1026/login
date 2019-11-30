import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Welcome from '../pages/Welcome'


function App() {
  return (
    
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
