import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './history';
import GlobalStyle from './Styles/global';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';


import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
  <AuthProvider>
      <Router history={history}>
        <Navbar/>
          <Routes />
     </Router>
     <Footer />
     <GlobalStyle/>
  </AuthProvider>
  );
}

export default App;
