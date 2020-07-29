import React, {useContext} from 'react';
import { Link,  } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import useForm from '../Util/hooks/useForm.js'


 import { Container, Title } from '../Util/formStyle';

function Login() {
    const {  loading, handleLogout, handleLogin} = useContext(Context);
    const [{ values }, handleChange,  handleSubmit] = useForm();


    
    const enviarForm = () => {
      const { name , password} = values;
 
      handleLogin(name , password)
    };
  

    return (
      <>

          <Container>
            <Title>Efetuar Login </Title>

              <form  onSubmit={handleSubmit(enviarForm)}>
                <input name="name" type="text" placeholder="Seu nome de usuario" onChange={handleChange}/>

                <input name="password"  type="password"  placeholder="Sua senha"  onChange={handleChange}/>

                <button type="submit"> {loading ? 'Carregando...' : 'Acessar'} </button>

                <Link to="/register">Criar conta </Link> 

                <Link to='/' onClick={handleLogout}></Link>
              </form>
          </Container>
        </>
    );
}

Login.propTypes = {

};

export default Login;




