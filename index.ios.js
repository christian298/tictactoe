'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStore} from 'redux';
import tictactoe from './reducers/reducers.js';
import {setField, switchPlayer} from './actions/actions.js';

import Board from './components/board.js';
import PlayerList from './components/playerList.js';

let store = createStore(tictactoe);
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(setField(2, 1));

unsubscribe();

class TicTacToeRN extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Board />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('TicTacToeRN', () => TicTacToeRN);
