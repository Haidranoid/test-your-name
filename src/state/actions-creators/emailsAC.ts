import {Dispatch} from "redux";

import mails from "../../static/api/mail-data.json"
import EmailsTypes from "../actions-types/emailsTypes";
import EmailsActions from "../actions/emailsActions";
import {IEmail} from "../interfaces/emails";
import {GetState} from "../reducers";

// -------------------------------- Get Emails -----------------------------------
export const getEmails = () => async (dispatch: Dispatch<EmailsActions>) => {
    dispatch({
        type: EmailsTypes.GET_EMAILS_STARTED,
    })
    try {
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

// -------------------------------- Create Email -----------------------------------
export const createEmail = (email: IEmail) => async (dispatch: Dispatch<EmailsActions>) => {
    dispatch({
        type: EmailsTypes.CREATE_EMAILS_STARTED,
    })
    try {
        dispatch({
            type: EmailsTypes.CREATE_EMAILS_SUCCESS,
            payload: email,
        })

    } catch (e) {
        dispatch({
            type: EmailsTypes.CREATE_EMAILS_ERROR,
            //@ts-ignore
            payload: e.message
        })
    }
}

// -------------------------------- Update Email -----------------------------------
export const updateEmail = (id: string, emailUpdated: IEmail) => async (dispatch: Dispatch<EmailsActions>, getState: GetState) => {
    dispatch({
        type: EmailsTypes.UPDATE_EMAILS_STARTED,
    })
    try {
        const emails = getState().emailsState.emails
        const emailsUpdated = emails.map(email => {
            if (email.id === id)
                return emailUpdated

            return email
        })

        dispatch({
            type: EmailsTypes.UPDATE_EMAILS_SUCCESS,
            payload: emailsUpdated
        })

    } catch (e) {
        dispatch({
            type: EmailsTypes.UPDATE_EMAILS_ERROR,
            //@ts-ignore
            payload: e.message
        })
    }
}

// -------------------------------- Delete Email -----------------------------------
export const deleteEmail = () => async (dispatch: Dispatch<EmailsActions>) => {
    dispatch({
        type: EmailsTypes.GET_EMAILS_STARTED,
    })
    try {


    } catch (e) {
        dispatch({
            type: EmailsTypes.GET_EMAILS_ERROR,
            //@ts-ignore
            payload: e.message
        })
    }
}