import React from 'react';
import Router from "./components/Router/Router"
import styled from 'styled-components';

const ContainerGeneral = styled.div`
margin: 0;
width: 100%;
min-height: 70vh;
display: flex;
flex-direction: column;
margin-bottom: 10vh;
`

function App() {
  return (
    <ContainerGeneral>
      <Router />
    </ContainerGeneral>
  );
}

export default App;