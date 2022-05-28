import React from 'react';
import './App.css';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './components/content/dashboard';
import { Route, Routes } from 'react-router-dom';
import { Library } from './components/content/library';
import { Search } from './components/content/search';

function App() {
  return (
    <div className="App flex">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/library" element={<Library />} />
              <Route path="/search" element={<Search />} />
            </Routes>
    </div>
  );
}

export default App;
