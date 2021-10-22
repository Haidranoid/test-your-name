import produce from "immer";
import EmailsTypes from "../actions-types/emailsTypes";
import EmailsActions from "../actions/emailsActions";
import {IEmail} from "../interfaces/emails";

export interface EmailsState {
    emails: IEmail[];
    emailsSpam: IEmail[];
    emailsDeleted: IEmail[];

    loading: boolean;
    error: string | null;
}

const initialState: EmailsState = {
    emails: [],
    emailsSpam: [],
    emailsDeleted: [],

    loading: false,
    error: null,
};

const emailsReducer = produce((state: EmailsState, action: EmailsActions) => {
    switch (action.type) {
        /* --------------------------------- Get Emails --------------------------------- */
        case EmailsTypes.GET_EMAILS_STARTED:
            state.loading = true;
            state.error = null;
            break;

        case EmailsTypes.GET_EMAILS_ERROR:
            state.loading = false;
            state.error = action.payload;
            break;

        case EmailsTypes.GET_EMAILS_SUCCESS:
            state.emails = action.payload;

            state.loading = false;
            state.error = null;
            break;

        /* --------------------------------- Create Email --------------------------------- */
        case EmailsTypes.CREATE_EMAILS_STARTED:
            state.loading = true;
            state.error = null;
            break;

        case EmailsTypes.CREATE_EMAILS_ERROR:
            state.loading = false;
            state.error = action.payload;
            break;

        case EmailsTypes.CREATE_EMAILS_SUCCESS:
            state.emails.unshift(action.payload);

            state.loading = false;
            state.error = null;
            break;

        /* --------------------------------- Update Emails --------------------------------- */
        case EmailsTypes.UPDATE_EMAILS_STARTED:
            state.loading = true;
            state.error = null;
            break;

        case EmailsTypes.UPDATE_EMAILS_ERROR:
            state.loading = false;
            state.error = action.payload;
            break;

        case EmailsTypes.UPDATE_EMAILS_SUCCESS:
            state.emails = action.payload;

            state.loading = false;
            state.error = null;
            break;
    }
}, initialState)

export default emailsReducer;
