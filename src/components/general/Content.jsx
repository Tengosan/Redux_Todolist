import React from 'react';

import ContentComponent from './ContentComponent';
import TaskListPage from './TaskListPage';
import TaskDivider from './TaskDivider';
import TaskEditPage from './TaskEditPage';

const Content = () => (
  <ContentComponent>
    <TaskListPage />
    <TaskDivider />
    <TaskEditPage />
  </ContentComponent>
);

export default Content;
