import {combineReducers} from "redux";
import emailsReducer from "./emailsReducer";

const rootReducer = combineReducers({
    emailsState: emailsReducer,
});

// used to the type definition in the Hook useTypedSelector
export type AppState = ReturnType<typeof rootReducer>;

// used to the type definition in the Function getState
export type GetState = () => AppState;

export default rootReducer;