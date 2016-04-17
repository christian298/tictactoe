'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const colors = [
    {value: 0, color: 'transparent'},
    {value: 1, color: 'lightblue'},
    {value: -1, color: 'lightgreen'}
];

const Field = (props) => {
    return(
        <TouchableOpacity onPress={() => props.handler(props.index, props.value)}
            key={props.index}
            style={[styles.field, {
                width: props.size,
                height: props.size,
                backgroundColor: colors.filter(color => color.value === props.value)[0].color
            }]}>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    field: {
        borderWidth: 1,
        borderColor: 'black',
    }
});

Field.defaultProps = {
    value: 0
}

export default Field;
