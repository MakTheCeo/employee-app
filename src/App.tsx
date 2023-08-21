import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Login from './components/Login';
import EmployeeDashboard from './components/EmployeeDashboard';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee'; 
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/add-employee" element={<AddEmployee />} /> 
        <Route path="/search-employee" element={<SearchEmployee />} /> 

      </Routes>
    </Router>
  );
};

export default App;
