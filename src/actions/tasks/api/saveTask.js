import { SAVE_TASK } from 'Constants/tasks';

const saveTask = task => ({
  type: SAVE_TASK,
  payload: {
    request: {
      method: 'PATCH',
      url: `/tasks/${task.id}`,
      data: {
        ...task,
      },
    },
  },
});

export default saveTask;
