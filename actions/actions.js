export const SET_FIELD = 'SET_FIELD';
export const SWITCH_PLAYER = 'SWITCH_PLAYER';

export function setField(field, value) {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export function switchPlayer(player) {
    return {
        type: SWITCH_PLAYER,
        player
    }
}
