import {all} from 'redux-saga/effects';
import checktheSaga from "./checktheSaga";


export default function* rootSaga(getState) {
  yield all([
    checktheSaga(),
  ]);
}
