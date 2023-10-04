import React from 'react';
import AdminLogin from './components/AdminLogin'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import HomePage from './src/components/Homepage';
import CV from './components/cv';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard/cv" element={<CV />} />

        <Route path="admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        

      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
