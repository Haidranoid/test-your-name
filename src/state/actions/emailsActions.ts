import EmailsTypes from "../actions-types/emailsTypes";
import {IEmail} from "../interfaces/emails";

// -------------------------------- Get Emails -----------------------------------
interface GetEmailsActionStarted {
    type: EmailsTypes.GET_EMAILS_STARTED;
}

interface GetEmailsActionSuccess {
    type: EmailsTypes.GET_EMAILS_SUCCESS;
    payload: IEmail[];
}

interface GetEmailsActionError {
    type: EmailsTypes.GET_EMAILS_ERROR;
    payload: string;
}

// -------------------------------- Emails Actions -------------------------------------
type EmailsActions =
    GetEmailsActionStarted |
    GetEmailsActionSuccess |
    GetEmailsActionError

export default EmailsActions;