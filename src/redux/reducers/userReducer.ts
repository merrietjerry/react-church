import { A } from "../../constants/actionTypes";

export function loginReducer(state: any = { isFetching: false }, action: any) {
  switch (action.type) {
    case A.LOGIN_REQUEST:
      return Object.assign({}, state, { isFetching: true, login: false });
    case A.LOGIN_SUCCESS:
      return Object.assign({}, state, action.response.data, {
        isFetching: false
      });
    case A.LOGIN_FAILURE:
      return [...state, { isFetching: true }];
    case A.USER_INFO_REQUEST:
      return { ...state, isFetching: true };
    case A.USER_INFO_SUCCESS:
      return Object.assign({}, state, action.response.data, {
        isFetching: false
      });
    case A.USER_INFO_FAILURE:
      return { ...state, isFetching: true };
    case A.USER_LOGOUT:
      return {}
    default:
      return state;
  }
}

export function registrationReducer(
  state: any = { inProgress: false },
  action: any
) {
  switch (action.type) {
    case A.REGISTRATION_REQUEST:
      return Object.assign({}, state, { inProgress: true });
    case A.REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        inProgress: false,
        data: action.response.data
      });
    case A.REGISTRATION_FAILURE:
      return [...state, { inProgress: true }];
    default:
      return state;
  }
}
