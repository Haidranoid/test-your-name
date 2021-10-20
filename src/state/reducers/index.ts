import {combineReducers} from "redux";
import emailsReducer from "./emailsReducer";

const rootReducer = combineReducers({
    emailsState: emailsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;