const defaultArray = Array(9).fill('')

const squaresReducer = (state = defaultArray, action) => {
    switch (action.type) {
        case 'SQUARES':
            return state = [...action.payload];
        default:
            return state;
    }

};
export default squaresReducer;