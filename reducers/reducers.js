import {SET_FIELD} from '../actions/actions.js';
import TicTacToe from '../model/tictactoe.js';

let ttt = new TicTacToe(3);

const initialState = {
    board: ttt.getBoard()
};

function tictactoe(state = initialState, action) {
    switch (action.type) {
        case SET_FIELD:
            let newBoard = state.board;
            const cords = ttt.getCords(action.field);
            newBoard[cords.row][cords.col] = action.value;
            
            return Object.assign({}, state, {
                board: newBoard
            })
        default:
            return state
    }
}

export default tictactoe;
