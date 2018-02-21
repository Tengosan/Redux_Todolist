import { ADD_TASK } from 'Constants/tasks';

const addTask = task => ({
  type: ADD_TASK,
  payload: {
    request: {
      method: 'POST',
      url: '/tasks',
      data: {
        ...task,
      },
    },
  },
});

export default addTask;
