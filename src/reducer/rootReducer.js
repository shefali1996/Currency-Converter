import {combineReducers} from 'redux'
import ConvertReducer from './ConvertReducer'

const rootReducer=combineReducers(
    {
    ConvertReducer,
}
);

export default rootReducer;