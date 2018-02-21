import { createSelector } from 'reselect';
import filter from 'lodash/filter';
import some from 'lodash/some';
import tasksSelector from 'Selectors/tasks/tasksSelector';
import filtersSelector from 'Selectors/filtersSelector';

const isTaskMatchFilter = (task, filters) => (
  some(filters, item => item.selected && item.name === task.priority)
);

const getTasksBySelectedFilters = createSelector(
  tasksSelector,
  filtersSelector,
  (tasks, filters) => (filter(tasks, task => isTaskMatchFilter(task, filters))),
);

export default getTasksBySelectedFilters;
