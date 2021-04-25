import { SEND_CURRENT_REQUEST, SEND_CURRENT_REQUEST_FAILURE, SEND_CURRENT_REQUEST_SUCCESS } from "../actionTypesCurrent"

const initialState={
    loading:false,
    currentWeather:{},
    error:{}

}

const fetchCurrentDataReducer=(state=initialState,action)=>{

    switch(action.type){
        case SEND_CURRENT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SEND_CURRENT_REQUEST_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    currentWeather:action.payload,
                    error:{}
                }
        case SEND_CURRENT_REQUEST_FAILURE:
            return {
                ...state,
                    loading:false,
                    currentWeather:{},
                    error:action.error
            }
        
        
        default: return state;    
    }
}

export default fetchCurrentDataReducer