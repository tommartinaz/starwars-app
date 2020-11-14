import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movies from './moviesReducer';

export default combineReducers({
    form: formReducer,
    movies,
})