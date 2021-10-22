import React, {FC} from "react"
import clsx from "clsx";
import attachment from "./../../static/images/attachment.svg"
import {IEmail} from "../../state/interfaces/emails";

import "./styles.sass"

interface EmailCardProps {
    email: IEmail;
    onSelected: () => void;
}

const EmailCard: FC<EmailCardProps> = ({email, onSelected}) => {
    return <div onClick={onSelected}
                className={clsx("email-card-container", "padding", {"background-blue": !email.isRead})}>

        <div className="flex">
            <div className="flex-item-1 email-subject">
                {email.subject}
            </div>
            <div className="flex-item-1 text-right">
                {email.date}
            </div>
        </div>

        <div className="flex" style={{marginTop: '4px'}}>
            <div className="flex-item-1">
                {email.body.split(" ", 4).map(word => `${word} `)}
            </div>
            <div className="flex-item-1 text-right">
                {email.attachments.length !== 0 && <img src={attachment} alt="not found" width="15px" height="20px"/>}
            </div>
        </div>

    </div>
}

export default EmailCard