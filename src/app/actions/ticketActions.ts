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
  ticketName: string;
  ticketDescription: string;
}

export type TicketActions = TicketOpenAction;

export const OpenTicket: ActionCreator<
  ThunkAction<Promise<any>, TicketState, null, TicketOpenAction>
> = (id: string, ticketName: string, ticketDescription: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // Your logic here
      dispatch({
        type: TicketActionTypes.OPEN,
        id: id,
        ticketName: ticketName,
        ticketDescription: ticketDescription,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
