import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './components/content/dashboard';
import { Library } from './components/content/library';
import { Search } from './components/content/search';
import { Header } from './components/content/header';

function App() {
    return (
        <div className="App flex">
            <Sidebar />
            <div className="bg-ligtherPrimary w-5/6">
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
