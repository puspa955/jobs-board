import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Auth from '@/components/Auth';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Dashboard /> : <Auth />;
};

export default Index;
