import TOGGLE_FILTER from 'Constants/filters';
import toggleFilter from 'Utils/filters';

export const initialState = [{
  name: 'All',
  selected: true,
}, {
  name: 'Normal',
  selected: true,
}, {
  name: 'High',
  selected: true,
}, {
  name: 'Very High',
  selected: true,
}];

export const filtersReducer = (state = initialState, action) => {
  let newState = state;
  if (action.type === TOGGLE_FILTER) {
    newState = toggleFilter(state, action.filterName);
  }
  return newState;
};
