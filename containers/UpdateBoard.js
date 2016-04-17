import {connect} from 'react-redux';
import {setField} from '../actions/actions';
import Board from '../components/board';

const mapStateToProps = (state) => {
    return {
        board: state.board,
        player: state.player
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFieldClick: (field, value) => {
            dispatch(setField(field, value))
        }
    }
};

const UpdateBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default UpdateBoard;
