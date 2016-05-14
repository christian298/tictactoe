'use strict';
import React, {
    Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class PlayerList extends Component {
    render() {
        return(
            <View>
                <Text>{this.props.player}</Text>          
                <View style={styles.colorBox}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    activePlayer: {
        color: 'red',
    },
    colorBox: {
        width: 40,
        height: 40,
    }
});
