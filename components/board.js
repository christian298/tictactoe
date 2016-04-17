'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import TicTacToe from '../model/tictactoe.js';
import Field from './field.js';

const Board = (props) => {
    let index = -1;
    let board = props.board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            index ++;
            return(
                <Field 
                    handler={props.onFieldClick} 
                    index={index} 
                    size={90} 
                    value={col}
                />
            );
        });
    });
    
    return(
        <View style={styles.board}>
            {board}
        </View>
    );
};
/*
export default class Board extends Component {
    constructor() {
        super();

        this.ttt = new TicTacToe(3);
        
        this.state = {
            fieldState: this.ttt.getBoard(),
            player: 1
        };
    }

    fieldColor(state) {
        if(state === 0) {
            return 'transparent'
        } else if(state === -1) {
            return 'lightgreen';
        } else {
            return 'lightblue';
        }
    }

    renderFields(count) {
        let fields = []; 

        for(let i = 0; i < count; i++) {
            
            let cord = this.ttt.getCords(i);
            let bgColor = this.fieldColor(this.state.fieldState[cord.row][cord.col]);

            fields.push(
                <TouchableOpacity onPress={() => this._onPress(i)}
                    key={i} 
                    style={[styles.field, {
                            width: 270 / this.props.size,
                            height: 270 / this.props.size,
                            backgroundColor: bgColor 
                        }]}>
                </TouchableOpacity>
            );
        }

        return fields;
    }
 
    _onPress(index) {
        const newBoard = this.ttt.updateBoardAt(index, this.state.player);
        const gameState = this.ttt.isGameOver();

        this.setState({
            fieldState: newBoard,
            gameOver: gameState,
            player: this.state.player === 1 ? -1 : 1
        });
    }
    
    render() {
        if(this.state.gameOver) {
            return(
                <Text>Game over</Text>
            );
        }
        
        return (
            <View style={styles.board}>
                {this.renderFields(this.props.size * this.props.size)}       
            </View>
        );
    }
}
*/

Board.propTypes = {
    size: React.PropTypes.number
};

Board.defaultProps = {
    size: 3
};

const styles = StyleSheet.create({
    board: {
        width: 270,
        height: 270,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    field: {
        borderWidth: 1,
        borderColor: 'black',
    }
});

export default Board;
