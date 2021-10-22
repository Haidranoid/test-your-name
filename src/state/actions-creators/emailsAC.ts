import {Dispatch} from "redux";

import mails from "../../static/api/mail-data.json"
import EmailsTypes from "../actions-types/emailsTypes";
import EmailsActions from "../actions/emailsActions";
import {IEmail} from "../interfaces/emails";

export const getEmails = () => async (dispatch: Dispatch<EmailsActions>) => {
    dispatch({
        type: EmailsTypes.GET_EMAILS_STARTED,
    })
    try {
        /*
         * // fetch data from API
         * const {data} = await axios.get<IEmail[]>(`.../api/emails`);
         */

        dispatch({
            type: EmailsTypes.GET_EMAILS_SUCCESS,
            payload: mails as IEmail[],
        })

    } catch (e) {
        dispatch({
            type: EmailsTypes.GET_EMAILS_ERROR,
            //@ts-ignore
            payload: e.message
        })
    }
}