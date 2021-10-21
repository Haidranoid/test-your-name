import React, {FC} from "react"
import arrows from "../../static/images/arrows.svg"
import {IEmail} from "../../state/interfaces/emails";

import "./styles.sass"

interface EmailsFilterProps {
    filter: string;
    emails: IEmail[];
    onContinue?: (emailsFiltered: IEmail[]) => void
}

const EmailsFilter: FC<EmailsFilterProps> = () => {
    return <div className="filter-container">
        <div className="filter-container-title">
            Filter by
        </div>
        <div className="filter-container-arrows">
            <img src={arrows} alt="not found" width="8px" height="10px"/>
        </div>
        <div className="filter-container-content">
            <a href="#">Inbox</a>
            <a href="#">Spam</a>
            <a href="#">Deleted</a>
        </div>
    </div>
}

export default EmailsFilter