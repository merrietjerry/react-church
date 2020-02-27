import { combineReducers } from "redux";
import courses from "./courseReducer";
import navigation from "./navigationReducer";
import {loginReducer as user, registrationReducer as registration}  from "./userReducer";

const rootReducer = combineReducers({
  courses,
  navigation,
  user,
  registration
});

export default rootReducer;
