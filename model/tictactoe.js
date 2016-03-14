export default class TicTicToe {
    constructor(boardSize) {
        this.board = this.initBoard(boardSize);
        this.size = boardSize;
    }

    initBoard(size) {
        let board = Array(size);
        for(let i = 0; i < size; i++) {
            board[i] = 0;
        }    
        
        return board;
    }

    getBoard() {
        return this.board;
    }

    updateBoardAt(index, newValue) {
        this.board[index] = newValue;
        return this.board;
    }

    resetBoard() {
        this.board = initBoard(this.size);
        return this.board;
    }

    getCords(index) {
        const row = Math.floor(index / this.size);
        const field = index - (row * this.size);
    }

    taken(index) {
    }

    takeField(index) {
    
    }
} 
