import { combineReducers } from "redux";
// Reducers used in our Website
import { postReducer } from '../Pages/Home/Redux/postReducers';

export const rootReducer = combineReducers({
    postsInfo: postReducer,
})