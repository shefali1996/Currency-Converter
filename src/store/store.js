import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducer/rootReducer'
import RootSaga from "../sagas/RootSaga";

const SagaMiddleware = createSagaMiddleware();

const store=createStore(
  rootReducer,
  applyMiddleware(logger,SagaMiddleware)
);

SagaMiddleware.run(RootSaga)

export default store
