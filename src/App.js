import React from 'react';
import './App.css';
import { InfoProvider } from './components/organisms/Context';
import InsertInfo from './components/organisms/InsertInfo';

function App() {
  return (
    <div className="App">
      <InfoProvider>
        <InsertInfo></InsertInfo>
      </InfoProvider>
    </div>
  );
}

export default App;
