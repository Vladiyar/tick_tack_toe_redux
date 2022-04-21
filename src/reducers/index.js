import {combineReducers} from 'redux';
import resultReducer from "./result";
import squaresReducer from "./squares";
import turnReducer from "./turn";

const allReducers = combineReducers({
    turnReducer: turnReducer,
    resultReducer: resultReducer,
    squaresReducer: squaresReducer,

})

export default allReducers;