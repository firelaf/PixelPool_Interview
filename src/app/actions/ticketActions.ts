import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TicketState } from "../reducers/TicketReducer";

export enum TicketActionTypes {
  OPEN = "open",
  RESOLVE = "resolve",
  CLOSE = "close",
  DELETE = "delete",
}

export interface TicketOpenAction {
  type: TicketActionTypes.OPEN;
  id: string;
}

export type TicketActions = TicketOpenAction;

export const OpenTicket: ActionCreator<
  ThunkAction<Promise<any>, TicketState, null, TicketOpenAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // Your logic here
      dispatch({
        type: TicketActionTypes.OPEN,
        id: id,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
