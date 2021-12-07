import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TicketReducer, TicketState } from "../reducers/TicketReducer";
import { isLoggedReducer } from "../reducers/isLogged";

// Create an interface for the application state
export interface IAppState {
  basicState: TicketState;
  isLogged: boolean;
}

// Create the root reducer
const rootReducer = combineReducers({
  ticketState: TicketReducer,
  isLogged: isLoggedReducer,
});

const composeEnhancers = composeWithDevTools({});

// Create a configure store function of type `IAppState`
export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
