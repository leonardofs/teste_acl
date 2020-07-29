import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from './Context/AuthContext';

import Login from './Pages/Login';
import Users from './Pages/Users';
import Home from './Pages/Home';
import Register from './Pages/Register'
import UserEdit from './Pages/Users/Edit'

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
     return <h2>Loading...</h2>;
  }

  if (isPrivate && !authenticated) {
     return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (

      <Switch>
        <CustomRoute exact path="/register" component={Register} />
        <CustomRoute exact path="/login" component={Login} />
        <CustomRoute exact path="/users" component={Users} isPrivate/> 
        <CustomRoute exact path="/user/update/:id"  component={UserEdit} isPrivate/> 
        <CustomRoute path="/" component={Home} isPrivate />
      </Switch>

  );
}