import React from 'react';
import './App.css';
import { InfoProvider, InsertPhoneBook } from './components/organisms/Context';

function App() {
  return (
    <div className="App">
      <InfoProvider>
        <InsertPhoneBook />
      </InfoProvider>
    </div>
  );
}

export default App;
