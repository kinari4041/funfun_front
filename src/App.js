import './style.css';
import './css/default.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Search, Register, Popular, Recent } from './pages'

const App = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    );
  }

export default App;
