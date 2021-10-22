import React, {FC} from "react"
import {IEmail} from "../../state/interfaces/emails";

import "./styles.sass"
import Button from "../button/Button";
import useActions from "../../state/hooks/use-actions";

interface EmailViewerProps {
    email: IEmail
}

const EmailViewer: FC<EmailViewerProps> = ({email}) => {

    const {updateEmail} = useActions()

    const handleMarkAsUnread = (email: IEmail) => {
        const emailUpdated: IEmail = {
            ...email,
            isRead: false
        }

        updateEmail(email.id, emailUpdated)
    }

    return <div className="email-viewer-container padding">

        <div className="flex flex-column">
            <div className="flex">
                <div className="flex-item-1">
                    <div className="flex">
                        <Button type="danger" onSubmit={() => {
                        }}>
                            Delete
                        </Button>
                        <span style={{width: '15px'}}/>
                        <Button onSubmit={() => {
                        }}>
                            Spam
                        </Button>
                    </div>
                </div>
                <div className="flex-item-1">
                    <div className="flex" style={{justifyContent: "flex-end"}}>
                        <Button type="primary" onSubmit={() => handleMarkAsUnread(email)}>
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