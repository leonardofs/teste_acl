import React, { useState, useEffect } from 'react';
import api from '../../api';
import JsonViewer from 'react-json-view'
 import { Container } from './styles';


function Home() {

  const[jsonData, setJsonData] = useState(undefined)

  useEffect(() => {
    (async () => {
   
      const data  = await api.get('/packets');
      console.log(data);
      if(data)
        setJsonData(data);
    })();
  
  }, []);


  return <Container> 
    <h2> Packets viewer</h2>
    <JsonViewer 
      src= {jsonData} 
      theme='solarized'
      collapsed= {false}
      />
  </Container>;
}

export default Home;