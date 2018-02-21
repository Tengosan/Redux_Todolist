import { DELETE_TASK } from 'Constants/tasks';

const deleteTask = task => ({
  type: DELETE_TASK,
  payload: {
    request: {
      method: 'DELETE',
      url: `/tasks/${task.id}`,
      data: {
        ...task,
      },
    },
  },
});

export default deleteTask;
