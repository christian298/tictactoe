export default class TicTacToe {
    constructor(boardSize) {
        this.board = this.initBoard(boardSize);
        this.size = boardSize;
    }

    initBoard(size) {
        let board = Array(size);
        for(let i = 0; i < size; i++) {
            board[i] = Array(size);

            for(let x = 0; x < size; x++) {
                board[i][x] = 0; 
            }
        }    
        
        return board;
    }

    getBoard() {
        return this.board;
    }

    updateBoardAt(index, newValue) {
        let cord = this.getCords(index);
        this.board[cord.row][cord.col] = newValue;
        return this.board;
    }

    resetBoard() {
        this.board = initBoard(this.size);
        return this.board;
    }

    getCords(index) {
        const row = Math.floor(index / this.size);
        const col = index - (row * this.size);

        return {
            "row": row,
            "col": col
        };
    }

    fieldsTaken(value) {
        return (value === 1 || value === -1)
    }

    checkBoard(index) {
        const cord = this.getCords(index);
        const row = this.board[cord.row];
        const filtered = row.filter(this.fieldsTaken).length;

        if(filtered.length === this.size) {
            return filtered[0];    
        } else {
            return null;
        }
    }
} 
