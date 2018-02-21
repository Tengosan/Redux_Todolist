import { put, call, fork, take } from 'redux-saga/effects';

import fetchApi from 'Api';
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_FAIL } from 'Constants/tasks';


function* addTask(request) {
  try {
    yield call(fetchApi, request);
    yield put({ type: ADD_TASK_SUCCESS, task: request.data });
  } catch (e) {
    yield put({ type: ADD_TASK_FAIL, error: e });
  }
}

function* watchAddTask() {
  while (true) {
    const { payload } = yield take(ADD_TASK);
    yield fork(addTask, payload.request);
  }
}

export default watchAddTask;
