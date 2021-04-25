import { SEND_REQUEST, SEND_REQUEST_FAILURE, SEND_REQUEST_SUCCESS } from "../actionTypes";

const initialState={
    loading:false,
    weather:[],
    error:[]

}
const fetchDataReducer=(state=initialState,action)=>{

    switch(action.type){
        case SEND_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SEND_REQUEST_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    weather:action.payload,
                    error:[]
                }
        case SEND_REQUEST_FAILURE:
            return {
                ...state,
                    loading:false,
                    weather:[],
                    error:action.error
            }
        
        
        default: return state;    
    }
}

export default fetchDataReducer