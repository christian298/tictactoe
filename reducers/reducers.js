import {SET_FIELD} from '../actions/actions.js';
import {createBoard, getCordsForIndex} from '../helper/helper';

const BOARD_SIZE = 3;

const initialState = {
    board: createBoard(BOARD_SIZE),
    player: 1
};

function tictactoe(state = initialState, action) {
    switch (action.type) {
        case SET_FIELD:
            let newBoard = state.board;
            const cords = getCordsForIndex(action.field, BOARD_SIZE);
            newBoard[cords.row][cords.col] = state.player;
            
            return Object.assign({}, state, {
                board: newBoard,
                player: state.player === 1 ? -1 : 1
            })
        default:
            return state
    }
}

export default tictactoe;
