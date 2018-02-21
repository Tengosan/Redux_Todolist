import { LOAD_TASKS } from 'Constants/tasks';

const loadTasks = () => ({
  type: LOAD_TASKS,
  payload: {
    request: {
      method: 'GET',
      url: '/tasks',
    },
  },
});

export default loadTasks;
