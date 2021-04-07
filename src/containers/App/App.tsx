import React from 'react';
import Dashboard from '../Dashboard';
import TaskProvider from '../../modules/Tasks/Tasks';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
};

export default App;
