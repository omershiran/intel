import React, { useContext } from 'react';
import userContext from '../context/user-context'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/homepage';
import Login_form from '../components/login_form';
import Header from '../components/header';
import feedback from '../components/feedback';

const AppRouter = () => {
  // const { user } = useContext(userContext);
 
  return (
    <BrowserRouter>
      <div>
      <Header />
        <Switch>
        
          {/* <Route component={Header} /> */}
        </Switch>


        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/Login-form" component={Login_form}  />
          <Route path="/startShopping" component={HomePage}  />
          <Route path="/feedback" component={feedback} />
      
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;
