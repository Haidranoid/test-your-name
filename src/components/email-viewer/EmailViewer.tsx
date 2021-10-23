import React, {FC} from "react"
import {IEmail} from "../../state/interfaces/emails";
import Button from "../button/Button";

import "./styles.sass"

interface EmailViewerProps {
    email: IEmail;
    onMarkAsUnread: (email: IEmail) => void;
    onSpam: (email: IEmail) => void;
    onDelete: (email: IEmail) => void;
}

const EmailViewer: FC<EmailViewerProps> = ({email, onMarkAsUnread, onSpam, onDelete}) => {

    return <div className="email-viewer-container padding">

        <div className="flex flex-column">
            <div className="flex">
                <div className="flex-item-1">
                    <div className="flex">
                        <Button type="danger" onSubmit={() => onDelete(email)}>
                            Delete
                        </Button>
                        <span style={{width: '15px'}}/>
                        <Button onSubmit={() => onSpam(email)}>
                            Spam
                        </Button>
                    </div>
                </div>
                <div className="flex-item-1">
                    <div className="flex" style={{justifyContent: "flex-end"}}>
                        <Button type="primary" onSubmit={() => onMarkAsUnread(email)}>
                            Mark as unread
                        </Button>
                    </div>
                </div>
            </div>

            <span className="subject">
                {email.subject}
            </span>

            <div className="tags light-shadow bordered margin">
                <span style={{marginRight: '6px'}}>
                    Tags
                </span>
                <span className="light-shadow bordered" style={{fontSize: '6pt', padding: '4px'}}>
                    {email.tag}
                </span>
            </div>

            <div className="light-shadow bordered">
                <div className="email-body margin padding">
                    {email.body}
                </div>

                <div className="email-footer text-right">
                    <Button type="primary" onSubmit={() => {
                    }}>
                        Replay
                    </Button>
                </div>
            </div>

        </div>

    </div>
}

export default EmailViewer