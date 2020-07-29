import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../history';

export default function useAuth() {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authorization = localStorage.getItem('authorization');
    const user = localStorage.getItem('user');
    
     if (authorization) {

      api.defaults.headers.authorization = authorization;
      api.defaults.headers.user = user;
      setAuthenticated(true);
   
    }

    setLoading(false);
  }, []);
  
  async function handleLogin(name, password) {


    //realiza login na api
    const body= JSON.parse(` { "name" : "${name}", "password": "${password}" } `);
    const {data} = await api.post('/login', body);

    if (data){

      //guarda resposta do servidor
      localStorage.setItem('authorization', 'bearer ' + data.token);
      localStorage.setItem('user', data.user);


      api.defaults.headers.authorization = 'bearer ' + data.token;
      
      
      setAuthenticated(true);
      setLoading(false);

      history.push("/users");
    }
      //TODO: toast error
  }

  function handleLogout() {
    console.log('fez logout');
    setAuthenticated(false);
    localStorage.removeItem('authorization');
    localStorage.removeItem('user');
    api.defaults.headers.authorization  = undefined;


   // history.push("/login");
  }

  async function handleUserRegister(name, password, role){

    
    const body= JSON.parse(` { "name" : "${name}", "password": "${password}", "role": "${role}" } `);
    const result = await api.post('/user', body);

    console.log(result.data);
    return result;


  }


  
  return { authenticated, loading, setLoading, handleLogin, handleLogout,  handleUserRegister };
}