import {combineReducers} from "redux";
import authReducer from "./auth";
import chanelReducers from "./chanel";
import currentUserReducer from './currentUser';
import videoReducer from './Video'
import commentReducer from './comment'
export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
    videoReducer,
    commentReducer
});