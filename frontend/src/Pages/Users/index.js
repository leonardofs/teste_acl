import React, { useState, useEffect} from 'react';
import api from '../../api';
import history from '../../history'

 import { Container, Content, User, EditButton, DeleteButton} from './styles';

function Users() {


  const [users, setUsers] = useState([]);


  useEffect(() => {
    (async () => {
      
       console.log(api.defaults.headers.authorization);
        const  {data}  = await api.get('/users');
        setUsers(data);
        
    })();
    
  }, []);



  function handleEdit(id) {
    
    history.push('/user/update/'+id);


  };



 async function handleDelete (id) {

    const result = await api.post('/user/delete/'+id);

    console.log(result);
    const  {data}  = await api.get('/users');
    setUsers(data);

 };


function handleChange() {
    
}

  return (
    <Container>
      <h2>Lista de Usuarios</h2>
      <Content>
            <header>
                <p>Usuario </p> 
                <p>Cargo</p>
                <p/>
            </header>

            <ul>
                {users.map((user) => (
                    <User key={user.id}> 
                    <p>{user.name}</p> 
                   
                    <p>{user.role}</p>
                    
                    <EditButton onClick={(e) => handleEdit(user.id)}> editar</EditButton>
                    <DeleteButton onClick= {(e) => handleDelete(user.id)}> remover</DeleteButton>

                    </User>
                    // <EditContent>

                   // </EditContent>
                ))}
            </ul>
        </Content>
      {/* <ExitButton onClick={handleButtonClick}>Sair</ExitButton> */}
    </Container>
  );
}

Users.propTypes = {

};

export default Users;

