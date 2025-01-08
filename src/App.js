import React from 'react';
import './App.css';
import ListaTareas from './components/ListaTareas/listaTareas';

function App() {
  return (
    <div className="App bg-yellow-300 min-h-screen flex items-center justify-center">
      <header className="App-header">
        <ListaTareas />
      </header>
    </div>
  );
}

export default App;
