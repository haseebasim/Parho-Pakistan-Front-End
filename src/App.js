import React from 'react';
import './App.css';
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;