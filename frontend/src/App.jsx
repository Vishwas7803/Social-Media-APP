import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
