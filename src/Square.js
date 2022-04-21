import React from 'react';
import {draw, squares, turn, winner} from "./actions";
import squaresReducer from "./reducers/squares";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {patterns} from "./patters";
import resultReducer from "./reducers/result";



const Square = ({number}) => {
    const squaresReducer = useSelector(state => state.squaresReducer);
    const resultReducer =  useSelector(state => state.resultReducer);
    const turnReducer =  useSelector(state => state.turnReducer);

    const dispatch = useDispatch();

    const onClickHandler = (number) => {
        if (squaresReducer[number] !== '') {
            return;
        }

        let filledSquares = [...squaresReducer];
        filledSquares[number] = turnReducer;

        if (turnReducer === 'X') {
            dispatch(turn('O'));
        } else {
            dispatch(turn('X'))
        }

        findWinner(filledSquares);
        dispatch(squares(filledSquares));
    }


    const findWinner = (squaresData) => {
        for (let pattern in patterns) {
            patterns[pattern].forEach((element) => {
                if (
                    squaresData[element[0]] === '' ||
                    squaresData[element[1]] === '' ||
                    squaresData[element[2]] === ''
                ) {

                } else if (
                    squaresData[element[0]] === squaresData[element[1]] &&
                    squaresData[element[0]] === squaresData[element[2]]
                ) {
                    dispatch(winner(squaresData[element[0]]));
                }

                for (let i = 0; i < 9; i++) {
                    if (squaresData[i] === '') {
                        return;
                    }
                }

                dispatch(draw('DRAW'));
            });
        }
    }
    return (
        <div className="square" onClick={() => {
            onClickHandler(number);
        }}>
            {squaresReducer[number]}
        </div>
    );
};

export default Square;


