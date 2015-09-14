import objectAssign from 'object-assign'

import {
    FETCH_FEATUREDITEMS,
    REQUEST_FEATUREDITEMS, RECEIVE_FEATUREDITEMS
} from '../actions';


function rootReducer(state = {
    items: []
}, action) {
    switch (action.type) {
        case FETCH_FEATUREDITEMS:
            return objectAssign({}, state, {
            });
        case REQUEST_FEATUREDITEMS:
            return objectAssign({}, state, {
            });
        case RECEIVE_FEATUREDITEMS:
            return objectAssign({}, state, {
                items: action.items
            });
        default:
            return state;
    }
}

export default rootReducer;
