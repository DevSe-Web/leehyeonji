import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Pages/Sidebar'; // Sidebar 컴포넌트의 경로에 맞게 조정하세요.
import Home from './Pages/Home'; // Home 컴포넌트의 경로에 맞게 조정하세요.
import Profile from './Pages/Profile'; // Profile 컴포넌트의 경로에 맞게 조정하세요.
import Skills from './Pages/Skills'; // Skills 컴포넌트의 경로에 맞게 조정하세요.
import Archive from './Pages/Archive'; // Archive 컴포넌트의 경로에 맞게 조정하세요.

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;
