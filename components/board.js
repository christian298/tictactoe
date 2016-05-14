'use strict';
import React, {
    Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {fullRow} from '../helper/helper';

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
    
   console.log(fullRow(props.board)); 
    return(
        <View style={styles.board}>
            {board}
        </View>
    );
};

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
