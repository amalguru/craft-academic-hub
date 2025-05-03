
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientDashboardHome from './ClientDashboardHome';
import ClientOrders from './ClientOrders';
import ClientChat from './ClientChat';
import ClientPayments from './ClientPayments';
import ClientProfile from './ClientProfile';

const ClientDashboardPage = () => {
  return (
    <Routes>
      <Route index element={<ClientDashboardHome />} />
      <Route path="orders" element={<ClientOrders />} />
      <Route path="chat" element={<ClientChat />} />
      <Route path="payments" element={<ClientPayments />} />
      <Route path="profile" element={<ClientProfile />} />
    </Routes>
  );
};

export default ClientDashboardPage;
