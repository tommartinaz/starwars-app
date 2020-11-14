import _ from 'lodash';
import { SET_MOVIES } from '../../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
}