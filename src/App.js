import React from 'react';
import './App.css';
import { TextField } from './components/molecule/TextField';
import { List } from './components/organism/List';

function App() {
  return (
    <div className="App">
      <TextField />
      <List />
    </div>
  );
}

export default App;
