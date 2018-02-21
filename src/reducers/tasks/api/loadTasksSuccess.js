import getSortedTasks from 'Utils/tasks/getSortedTasks';

const loadTasksSuccess = (state, { tasks }) => {
  if (tasks) {
    const sortedTasks = getSortedTasks(tasks);
    return { ...state, tasks: sortedTasks, isServerError: false };
  }
  return state;
};

export default loadTasksSuccess;
