import React, {FC} from "react"
import clsx from "clsx";
import attachment from "./../../static/images/attachment.svg"
import {IEmail} from "../../state/interfaces/emails";

import "./styles.sass"

interface EmailCardProps {
    email: IEmail
}

const EmailCard: FC<EmailCardProps> = ({email}) => {
    return <div className={clsx("email-card-container", "padding", {"background-blue": !email.isRead})}>

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
                <img src={attachment} alt="not found" width="12px" height="17px"/>
            </div>
        </div>

    </div>
}

export default EmailCard