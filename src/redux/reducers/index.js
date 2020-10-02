import { combineReducers } from 'redux';

/** Reducers */
import currentUser from './currentUser';
import dictionary from './dictionary';



const rootReducer = combineReducers({
    currentUser,
    dictionary
});

export default rootReducer;
 