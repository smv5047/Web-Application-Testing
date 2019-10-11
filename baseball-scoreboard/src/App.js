import React, {useState} from 'react';
import './App.css';

import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
const [balls, ballUpdate] = useState(0)
const [strikes, strikeUpdate] = useState(0)
const [outs, outUpdate] = useState(0)



  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} outs={outs}/>
      <Dashboard balls={balls} strikes={strikes} outs={outs} ballUpdate={ballUpdate} strikeUpdate={strikeUpdate} outUpdate={outUpdate}/>
    </div>
  );
}

export default App;
