import React, {useState} from 'react';
import './App.css';

import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
const [balls, ballUpdate] = useState(0)
const [strikes, strikeUpdate] = useState(0)



  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard ballUpdate={ballUpdate} strikeUpdate={strikeUpdate}/>
    </div>
  );
}

export default App;
