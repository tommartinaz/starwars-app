import { SET_MOVIES } from '../../utils/constants';

export const setMovies = movies => dispatch => dispatch({
    type: SET_MOVIES,
    payload: movies,
});