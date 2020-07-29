import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/AuthContext';
 import { Container } from './styles';


 
 

function Navbar() {

    
 const { handleLogout} = useContext(Context);
  return (
      <Container>
           <Link to='/' >Packets</Link>
           <Link to='/login' >Login</Link>
           <Link to='/users' >Users</Link>
           <Link to='/login' onClick={handleLogout}>Logout</Link>
      </Container>

  );
}

export default Navbar;