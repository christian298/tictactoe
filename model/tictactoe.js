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

    checkRow() {
        let full = false;

        this.board.forEach(function(item) {
            let check = item.every(elem => elem === 1);

            if(check) {
                full = true;
            }
        });

        return full;
    }

    checkCol() {
        let full = false;

        for(let x = 0; x < this.size; x++) {
            let col = [];

            this.board.forEach(function(item) {
                col.push(item[x]);
            });

            let check = col.every(elem => elem === 1);

            if(check) {
                full = true;
            }
        }

        return full;
    }

    isGameOver() {
        console.log(`Row: ${this.checkRow()}`);
        console.log(`Col: ${this.checkCol()}`);

        if(this.checkRow() || this.checkCol()) {
          return true
        } else {
          return false;
        }
    }
}
