import { SEND_CURRENT_REQUEST, SEND_CURRENT_REQUEST_FAILURE, SEND_CURRENT_REQUEST_SUCCESS } from "./actionTypesCurrent"

export function fetchCurrentData(data){
    return{
        type:SEND_CURRENT_REQUEST,
        payload:data
    }
}

export const fetchCurrentDataSuccess=(weather)=>{
    return {
        type:SEND_CURRENT_REQUEST_SUCCESS,
        payload:weather
    }
}
export const fetchCurrentDataFailure=(error)=>{
    return {
        type:SEND_CURRENT_REQUEST_FAILURE,
        payload:{},
        error:error
    }
}