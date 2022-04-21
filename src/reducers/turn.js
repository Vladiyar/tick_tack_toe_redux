const turnReducer = (state ='X', action) => {
    switch(action.type){
        case 'TURN':
            return action.payload ? action.payload : state ;
        default:
            return state;
    }

}
export default turnReducer;
