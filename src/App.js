import React from 'react';
import './App.css';
import { TextField } from './components/molecule/TextField';
import { InfoList } from './components/molecule/InfoList';
import { ModifyField } from './components/molecule/ModifyField';

function App() {
  return (
    <div className="App">
      <TextField />
      <InfoList />
      <ModifyField />
    </div>
  );
}

export default App;
