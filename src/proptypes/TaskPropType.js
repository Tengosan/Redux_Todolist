import PropTypes from 'prop-types';

const TaskPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  isDue: PropTypes.bool,
  due: PropTypes.string,
  done: PropTypes.string,
  status: PropTypes.string,
  priority: PropTypes.string,
});

export default TaskPropType;
