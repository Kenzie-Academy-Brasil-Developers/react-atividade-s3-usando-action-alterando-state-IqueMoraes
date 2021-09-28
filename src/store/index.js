import { createStore, combineReducers } from "redux";
import UserReducer from "./modules/user/reducers";

const reducers = combineReducers({ user: UserReducer });

const store = createStore(reducers);

export default store;
