import {combineReducers} from 'redux'
import fetchCurrentDataReducer from './fetchCurrentDataReducer';
import fetchDataReducer from './fetchDataReducer'
const rootReducer=combineReducers({
fetchDataReducer,fetchCurrentDataReducer

});

export default rootReducer