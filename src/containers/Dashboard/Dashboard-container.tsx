import React from 'react';
import DashboardView from './Dashboard-view';
import { useTasks } from '../../modules/Tasks/Tasks';

const DashboardContainer: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <DashboardView 
      data={tasks}
    />
  );
};

export default DashboardContainer;
