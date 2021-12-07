import { Reducer } from "redux";
import { TicketActions, TicketActionTypes } from "../actions/ticketActions";

export interface TicketState {
  id: string;
  ticketStatus: string;
}

const initialTicketState: TicketState[] = [
  {
    id: "",
    ticketStatus: "",
  },
];

export const TicketReducer: Reducer<TicketState[], TicketActions> = (
  state = initialTicketState,
  action
) => {
  switch (action.type) {
    case TicketActionTypes.OPEN: {
      return [
        ...state,
        { id: action.id, ticketStatus: TicketActionTypes.OPEN },
      ];
      // state.push({id: action.id, ticketStatus: TicketActionTypes.OPEN});
    }

    default:
      return state;
  }
};
