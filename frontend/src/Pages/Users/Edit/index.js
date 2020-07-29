import React, {useState, useEffect} from 'react';
import useForm from '../../Util/hooks/useForm'
import api from '../../../api'

import { Container, Title } from '../../Util/formStyle';




function EditUser(props) {
  
    const [{ values }, handleChange, handleSubmit] = useForm();
  
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [id, setId] = useState(props.match.params.id);

   useEffect(() => {

    (async () => {


        const {data}  = await api.get('/user/'+ id);
        
        console.log(data);
        setRole(data.role);
        setName(data.name);
        console.log('aqui');
    })();
  }, []);


  



       const enviarForm = () => {  (async () => {
         const { name , role} = values;
          try {

             const body= JSON.parse(` { "name" : "${name}", "role": "${role}", "id" : "${id}"} `);
             const result = await api.post('/user/update', body);
             console.log(result);
   
          } catch (error) {
              console.log(error);
          }
         })();
      };



      return (

        <Container>
            <Title>Editando Usuario</Title>

            <form onSubmit={handleSubmit(enviarForm)}>
                <input name="name" defaultValue={name} type="text" placeholder="Seu nome de usuario" onChange={handleChange}/>
                <input name="role" defaultValue={role} type="text"  placeholder="usuario ou admin"  onChange={handleChange}/> 
                <button type="submit"> enviar </button>
            </form>
        </Container>
      );
}

export default EditUser;