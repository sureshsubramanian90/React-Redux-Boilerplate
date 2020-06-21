import { put, call, takeLatest } from 'redux-saga/effects';
import { exampleApi } from '../interfaces/Example/ExampleApi';

import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from '../actionTypes/ExampleActionTypes';

function* exampleSaga(action) {
  try {
    const params = action.payload;
    const result = yield call(exampleApi.getData, params);
    if (result.isSuccess) {
      yield put({ type: GET_DATA_SUCCESS, data: {} });
    } else {
      yield put({ type: GET_DATA_ERROR });
    }
  } catch (err) {
    yield put({ type: GET_DATA_ERROR });
  }
}

export default function* watchExampleRequest() {
  yield takeLatest(GET_DATA, exampleSaga);
}
