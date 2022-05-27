import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './components/content/dashboard';

function App() {
  return (
    <div className="App flex">
          <Sidebar></Sidebar>
          <Dashboard></Dashboard>
      
    </div>
  );
}

export default App;
