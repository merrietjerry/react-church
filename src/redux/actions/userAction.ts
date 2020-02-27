import { A } from "../../constants/actionTypes";
import { CALL_API } from "../../middleware/api";

import {IRegistration} from "../../components/Registration/IRegistration";

export const userActions = {
  login,
  register,
  getUserInfo,
  logout
};

function login(username = "", password = "") {
  return {
    [CALL_API]: {
      endpoint: "validate-user",
      method: "POST",
      data: JSON.stringify({ name: username, key: password }),
      types: [A.LOGIN_REQUEST, A.LOGIN_SUCCESS, A.LOGIN_FAILURE, A.ALERT_ERROR]
    }
  };
}

function register(data: IRegistration){
  return {
    [CALL_API]: {
      endpoint: "user",
      method: "POST",
      data: JSON.stringify({data}),
      types: [A.REGISTRATION_REQUEST, A.REGISTRATION_SUCCESS, A.REGISTRATION_FAILURE, A.ALERT_ERROR]
    }
  };
}

function getUserInfo(name: number){
  return {
    [CALL_API]: {
      endpoint: "user/"+name,
      method: "GET",
      types: [A.USER_INFO_REQUEST, A.USER_INFO_SUCCESS, A.USER_INFO_FAILURE, A.ALERT_ERROR]
    }
  };
}

function logout(){
  return {type: A.USER_LOGOUT}
}