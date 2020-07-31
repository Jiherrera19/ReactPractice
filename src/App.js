import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Joke from './components/Joke';
import jokesData from './jokesData';

function App() {
  const data = jokesData.map(joke => <Row><Joke key={joke.id} title={joke.question} text={joke.punchline}/></Row>);
  return (
    <Container>
      {data}
    </Container>
  );
}

export default App;
