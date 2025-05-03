
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderDashboardHome from './ProviderDashboardHome';
import ProviderProjects from './ProviderProjects';
import ProviderChat from './ProviderChat';
import ProviderEarnings from './ProviderEarnings';
import ProviderProfile from './ProviderProfile';

const ProviderDashboardPage = () => {
  return (
    <Routes>
      <Route index element={<ProviderDashboardHome />} />
      <Route path="projects" element={<ProviderProjects />} />
      <Route path="chat" element={<ProviderChat />} />
      <Route path="earnings" element={<ProviderEarnings />} />
      <Route path="profile" element={<ProviderProfile />} />
    </Routes>
  );
};

export default ProviderDashboardPage;
