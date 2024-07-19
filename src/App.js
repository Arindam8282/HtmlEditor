import { useEffect } from 'react';
import './App.css';
import Router from './router';
import localstorage from './Controllers/Localstorage';

function App() {
  useEffect(()=>{
    localstorage.init()
  },[])
  return (
    <div className="App">
      <Router />      
    </div>
  );
}

export default App;
