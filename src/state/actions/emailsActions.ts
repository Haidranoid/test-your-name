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

// -------------------------------- Update Email -----------------------------------
interface UpdateEmailsActionStarted {
    type: EmailsTypes.UPDATE_EMAILS_STARTED;
}

interface UpdateEmailsActionSuccess {
    type: EmailsTypes.UPDATE_EMAILS_SUCCESS;
    payload: IEmail[];
}

interface UpdateEmailsActionError {
    type: EmailsTypes.UPDATE_EMAILS_ERROR;
    payload: string;
}

// -------------------------------- Delete Email -----------------------------------
interface DeleteEmailsActionStarted {
    type: EmailsTypes.DELETE_EMAILS_STARTED;
}

interface DeleteEmailsActionSuccess {
    type: EmailsTypes.DELETE_EMAILS_SUCCESS;
    payload: IEmail;
}

interface DeleteEmailsActionError {
    type: EmailsTypes.DELETE_EMAILS_ERROR;
    payload: string;
}

// -------------------------------- Emails Actions -------------------------------------
type EmailsActions =
    GetEmailsActionStarted |
    GetEmailsActionSuccess |
    GetEmailsActionError |

    UpdateEmailsActionStarted |
    UpdateEmailsActionSuccess |
    UpdateEmailsActionError |

    DeleteEmailsActionStarted |
    DeleteEmailsActionSuccess |
    DeleteEmailsActionError

export default EmailsActions;