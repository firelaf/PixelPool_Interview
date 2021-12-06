import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BasicReducer, IBasicState } from "../reducers/BasicReducer";
import { isLoggedReducer } from "../reducers/isLogged";

// Create an interface for the application state
export interface IAppState {
  basicState: IBasicState;
  isLogged: boolean;
}

// Create the root reducer
const rootReducer = combineReducers({
  basicState: BasicReducer,
  isLogged: isLoggedReducer,
});

const composeEnhancers = composeWithDevTools({});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
