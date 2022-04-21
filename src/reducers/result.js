const resultReducer = (state = '', action) => {
    switch (action.type){
        case 'WINNER':
            return action.payload;
        case 'DRAW':
            return 'draw';
        default:
            return state;
    }
}
export default resultReducer;