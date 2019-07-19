const initialState={
rates:[]
}

const ConvertReducer=(state=initialState,action)=>{
    console.log(action,'actionnnnnnnn')
    switch(action.type){
        case'CONVERT_SUCCESS':
            return{
                ...state,
                rates: action.payload,
            }
    }
    return state
}

export default ConvertReducer;