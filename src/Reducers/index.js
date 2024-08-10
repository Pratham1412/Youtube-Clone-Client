import {combineReducers} from "redux";
import authReducer from "./auth";
import chanelReducers from "./chanel";
import currentUserReducer from './currentUser';
import videoReducer from './Video';
import likedVideoReducer from './likedVideo';
import commentReducer from './comment';
import HistoryReducer from "./history";
export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
    videoReducer,
    likedVideoReducer,
    commentReducer,
    HistoryReducer
});