'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
            fieldState: [0,0,0,0,0,0,0,0,0]
        };
    }

    fieldColor(state) {
        if(state === 0) {
            return 'transparent'
        }

        return 'lightblue';
    }

    renderFields(count) {
        let fields = []; 

        for(let i = 0; i < count; i++) {
            fields.push(
                <TouchableOpacity onPress={() => this._onPress(i)}
                    key={i} 
                    style={[styles.field, {
                            width: 270 / this.props.size,
                            height: 270 / this.props.size,
                            backgroundColor: this.fieldColor(this.state.fieldState[i])
                        }]}>
                    <View>
                    </View>
                </TouchableOpacity>
            );
        }

        return fields;
    }
 
    _onPress(index) {
        let newState = this.state.fieldState.map(function(value, i) {
            if(index === i) {
                return value === 0 ? 1 : 0
            }

            return value
        });

        this.setState({
            fieldState: newState
        });
    }
    
    render() {
        return (
            <View style={styles.board}>
                {this.renderFields(this.props.size * this.props.size)}       
            </View>
        );
    }
}

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
