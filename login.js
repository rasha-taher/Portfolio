import React from 'react';
import AdminLogin from './components/AdminLogin'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import App from 'App.js';
import CV from './components/cv';

const Login = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard/cv" element={<CV />} />

        <Route path="admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        

      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
export default Login;
