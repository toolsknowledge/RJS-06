const initialState = {
    bal : 5000
};

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW_STAX":
            return{
                ...state,
                bal : state.bal - action.value
            }
        default:
            return state;
    }
};

export default reducer;