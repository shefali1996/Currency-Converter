import { put } from "redux-saga/effects";
import axios from "axios";
import { convertSuccess } from "../actions/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const convertRequest = code => {
  const notify = alert => toast(alert);
  return axios
    .get(`https://api.exchangeratesapi.io/latest?base=${code}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      notify("Error Found");
      return error;
    });
};

export function* convert(action) {
  let res = yield convertRequest(action.payload);
  try{
    yield put(convertSuccess(res));
  }
  catch(err){
  }
}
