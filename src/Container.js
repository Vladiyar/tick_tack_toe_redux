import React from 'react';
import Square from "./Square";
import {useDispatch, useSelector} from "react-redux";
import {squares, winner} from "./actions";

const Container = () => {
    const resultReducer = useSelector(state => state.resultReducer);
    const turnReducer = useSelector(state => state.turnReducer);
    const dispatch = useDispatch();

    const onRestartHandler = () => {
    dispatch(squares(Array(9).fill('')));
    dispatch(winner(''));
}
    
    let arrayOfSquares = []
    for (let i = 0; i < 9; i++) {
        arrayOfSquares.push(<Square key={i} number={i}/>)
    }

    return (
        <div>
            <div className='turn-result'>
                <h2>Turn: {turnReducer}</h2>
                {resultReducer.length === 1 && (
                    <div className="winner">
                        <h2>{resultReducer} won</h2>
                        <button onClick={() => onRestartHandler()}>Play again</button>
                    </div>
                )}
                {resultReducer === 'draw' && (
                    <div className="draw">
                        <h2>Draw</h2>
                        <button onClick={() => onRestartHandler()}>Play again</button>
                    </div>
                )}
            </div>
            <div className="container">
                {arrayOfSquares}
            </div>
        </div>
    );
};

export default Container;