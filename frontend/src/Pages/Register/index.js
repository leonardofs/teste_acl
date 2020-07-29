import React, {useContext} from 'react';
import useForm from '../Util/hooks/useForm'
import { Link,  } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

import { Container, Title } from '../Util/formStyle';

function Register() {

  const {  loading,  handleUserRegister } = useContext(Context);
  const [{ values }, handleChange, handleSubmit] = useForm();


  const enviarForm = () => {
    const { name , password} = values;
    const role = 'usuario';
    

    handleUserRegister(name , password, role)
  };



  return (
      <Container>
        <Title>Registrar Usuario</Title>

        <form  onSubmit={handleSubmit(enviarForm)}>
            <input name="name" id="name" type="text" placeholder="Seu nome de usuario" onChange={handleChange}/>
            {/* <input name="role"  type="text"  placeholder="leitor ou admin"  onChange={handleChange}/> */}
            <input name="password" id="password"  type="password"  placeholder="Sua senha"  onChange={handleChange}/>
            <button type="submit"> {loading ? 'Carregando...' : 'Regitrar'} </button>
          <Link to="/login">Fazer Login </Link>
        </form>

      </Container>
    );
}

export default Register;