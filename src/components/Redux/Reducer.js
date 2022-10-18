import { combineReducers } from "redux";
// Reducers used in our Website
import { postReducer } from '../Home/Redux/postReducers';

export const rootReducer = combineReducers({
    postsInfo: postReducer,
})