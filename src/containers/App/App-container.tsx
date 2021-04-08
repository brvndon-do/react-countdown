import React from 'react';
import AppView from './App-view';
import TaskProvider from '../../modules/Tasks/Tasks';

const AppContainer: React.FC = () => {
  return (
    <TaskProvider>
      <AppView />
    </TaskProvider>
  );
};

export default AppContainer;
