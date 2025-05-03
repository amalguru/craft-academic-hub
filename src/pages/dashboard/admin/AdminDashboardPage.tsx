
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboardHome from './AdminDashboardHome';

const AdminDashboardPage = () => {
  return (
    <Routes>
      <Route index element={<AdminDashboardHome />} />
      {/* Add other admin routes here */}
    </Routes>
  );
};

export default AdminDashboardPage;
