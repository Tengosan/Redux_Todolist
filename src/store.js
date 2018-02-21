import { createStore, applyMiddleware } from 'redux';
import { reducers, initialState } from 'reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;
