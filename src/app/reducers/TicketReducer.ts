import { Reducer } from "redux";
import { TicketActions, TicketActionTypes } from "../actions/ticketActions";

export interface TicketState {
  id: string;
  ticketName: string;
  ticketDescription: string;
  ticketStatus: string;
}

const initialTicketState: TicketState[] = [];

export const TicketReducer: Reducer<TicketState[], TicketActions> = (
  state = initialTicketState,
  action
) => {
  switch (action.type) {
    case TicketActionTypes.OPEN: {
      if (
        !state.includes({
          id: action.id,
          ticketName: action.ticketName,
          ticketDescription: action.ticketDescription,
          ticketStatus: TicketActionTypes.OPEN,
        })
      )
        return [
          ...state,
          {
            id: action.id,
            ticketName: action.ticketName,
            ticketDescription: action.ticketDescription,
            ticketStatus: TicketActionTypes.OPEN,
          },
        ];
      else return state;
    }
    // case TicketActionTypes.DELETE: {
    //   const index = state.indexOf({action.id, action.ticketName, action.ticketDescription, TicketActionTypes.DELETE});
    //   if(index > -1) {
    //     state.splice(index, 1);
    //     return state;
    //   }
    //   else return state;
    // }

    default:
      return state;
  }
};
