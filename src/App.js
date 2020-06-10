import React from 'react';
import Nav from './Components/Nav/Nav'
import route from './routes'
import './App.css';

function App(props) {
  return (
    <>
    <Nav/>
    {route}
    </>
  );
}

export default App;
