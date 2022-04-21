export const turn = (character) => {
    return{
        type: 'TURN',
        payload: character,
    };
};

export const winner = (player) => {
    return{
        type: 'WINNER',
        payload: player,
    }
}

export const draw = () => {
    return{
        type: 'DRAW',
    }
}

export const squares = (arr) => {
    return{
        type: 'SQUARES',
        payload: arr,
    }
}


