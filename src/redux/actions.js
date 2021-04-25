import { SEND_REQUEST, SEND_REQUEST_FAILURE, SEND_REQUEST_SUCCESS } from "./actionTypes";

export function fetchData(data){
    return{
        type:SEND_REQUEST,
        payload:data
    }
}

export const fetchDataSuccess=(weather)=>{
    return {
        type:SEND_REQUEST_SUCCESS,
        payload:weather
    }
}
export const fetchDataFailure=(error)=>{
    return {
        type:SEND_REQUEST_FAILURE,
        payload:{},
        error:error
    }
}

