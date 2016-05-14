export function createBoard(size) {
    let board = Array(size);
    for(let i = 0; i < size; i++) {
        board[i] = Array(size);

        for(let x = 0; x < size; x++) {
            board[i][x] = 0;
        }
    }

    return board;
}

export function getCordsForIndex(index, boardSize) {
    const row = Math.floor(index / boardSize);
    const col = index - (row * boardSize);

    return {
        "row": row,
        "col": col
    };
}

export function updateBoard(board, row, col, value) {
    board[row][col] = value;
    return board;
}

export function fullRow(board) {
    let fullRow = {
        "player1": false,
        "player2": false
    };
    
    board.forEach(item => {
        if(item.every(elem => elem === 1)) {
            fullRow.player1 = true;
        }

        if(item.every(elem => elem === -1)) {
            fullRow.player2 = true;
        }
    });
    
    return fullRow;
}

export function fullCol(board) {

}
