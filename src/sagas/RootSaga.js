import { takeLatest, all } from "redux-saga/effects";
import {convert} from './SagaActions'

function* watchActions() {
  yield takeLatest("CONVERT", convert);
}
export default function* RootSaga() {
  yield all([watchActions()]);
}