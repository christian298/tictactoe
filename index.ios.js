'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import tictactoe from './reducers/reducers.js';

import Board from './components/board.js';
import UpdateBoard from './containers/UpdateBoard.js';
import PlayerList from './components/playerList.js';

let store = createStore(tictactoe);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

class TicTacToeRN extends Component {
  render() {
      return (
        <Provider store={store}>
            <View style={styles.container}>
                <UpdateBoard />
            </View>
        </Provider>
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
