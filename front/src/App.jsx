import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PaginaLogin } from '../src/pages/PaginaLogin.jsx';
import { PaginaRegistro } from '../src/pages/PaginaRegistro.jsx';
import { PaginaDashboard } from '../src/pages/Dashboard.jsx';
import { isAuthenticated } from '../functions/auth.js'; // Ajusta la ruta según la ubicación de tu archivo auth.js
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route/>

        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/registro" element={<PaginaRegistro />} />

        <Route path="/dashboard" element={isAuthenticated() ? <PaginaDashboard /> : <Navigate to="/login" />} />

      </Routes>
    </Router>
  );
}

export default App;
