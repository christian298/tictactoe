export function initBoard(size) {
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
    const row = Math.floor(index / boadSize);
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
