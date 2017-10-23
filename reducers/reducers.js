import {combineReducers} from 'redux';
import {ADD1, ADD100000000, MINUS1} from '../actions/actionType';

const defaultState = {
    result: 0,
}

counter = (state = defaultState, action) => {
    switch (action.type) {
        case ADD1:
            return {...state, result: state.result + 1};
        case ADD100000000:
            return {...state, result: state.result + 100000000};
        case MINUS1:
            return {...state, result: state.result - 1};

        default:
            return state;
    }
}

export default combineReducers({
    counter
});












