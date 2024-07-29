import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <Outlet /> {/* Renders child routes */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;