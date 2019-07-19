import { put } from "redux-saga/effects";
import axios from "axios";
import { convertSuccess } from "../actions/actions";

const convertRequest = code => {
  return axios
    .get(`https://api.exchangeratesapi.io/latest?base=${code}`)
    .then(response => {
      return response.data.rates;
    });
};

export function* convert(action) {
  let rates = yield convertRequest(action.payload);
  yield put(convertSuccess(rates));
}
