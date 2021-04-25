import { takeEvery,call,put } from "@redux-saga/core/effects";
import { fetchDataFailure, fetchDataSuccess } from "../actions";
import { fetchCurrentDataFailure, fetchCurrentDataSuccess } from "../actionsCurrent";
import { SEND_REQUEST, SEND_REQUEST_FAILURE, SEND_REQUEST_SUCCESS } from "../actionTypes";
import { SEND_CURRENT_REQUEST } from "../actionTypesCurrent";

function* asyncFetchRequest(action){
    try{
        const URL=`http://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&units=metric&appid=3fbb2b31fd3e77c536be64abc677a4d1`
        
        const response =yield call(()=>fetch(URL).then(weather=>(weather.json())).then(weather=>(weather.list)));
        console.log(response);
        yield put(fetchDataSuccess(response))
    }
    catch(error){
        console.log(error);
        fetchDataFailure(error)
    }
}

function* asyncCurrentFetchRequest(action){
    try{
        const URL=`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&units=metric&appid=87cde31000e5170290cebdd94820d23d`
        
        const response =yield call(()=>fetch(URL).then(weather=>(weather.json())));
        console.log(response);
        yield put(fetchCurrentDataSuccess(response))
        
    }
    catch(error){
        console.log(error);
        fetchCurrentDataFailure(error)
    }
}
export function* fetchDataSaga(){
yield takeEvery(SEND_REQUEST,asyncFetchRequest)
yield takeEvery(SEND_CURRENT_REQUEST,asyncCurrentFetchRequest)

}