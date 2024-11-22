import { combineReducers } from "redux";
import userReducer from "./userSlice";
import rootReducer from "./rootReducer";

const combinedReducer = combineReducers({
  user: userReducer,
  cart: rootReducer,
});

export default combinedReducer;
