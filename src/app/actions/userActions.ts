import { Dispatch } from "redux";

export enum userActionType {
  LOGIN = "login",
  LOGOUT = "logout",
}

export interface userActions {
  type: string;
}

export const logIn = () => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: userActionType.LOGIN,
    });
};

export const logOut = () => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: userActionType.LOGOUT,
    });
};
