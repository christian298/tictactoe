'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Board from './components/board.js';
import PlayerList from './components/playerList.js';

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
