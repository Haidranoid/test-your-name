import React, {FC} from "react"
import {IEmail} from "../../state/interfaces/emails";

import "./styles.sass"
import Button from "../button/Button";

interface EmailViewerProps {
    email: IEmail
}

const EmailViewer: FC<EmailViewerProps> = ({email}) => {
    return <div className="email-viewer-container padding">

        <div className="flex flex-column">
            <div className="flex">
                <div className="flex-item-1">
                    <div className="flex">
                        <Button type="danger" onSubmit={() => {
                        }}>
                            Delete
                        </Button>
                        <span style={{width:'15px'}}/>
                        <Button onSubmit={() => {
                        }}>
                            Spam
                        </Button>
                    </div>
                </div>
                <div className="flex-item-1">
                    <div className="flex" style={{justifyContent: "flex-end"}}>
                        <Button type="primary" onSubmit={() => {
                        }}>
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
                    <Button type="primary" onSubmit={() => {}}>
                        Replay
                    </Button>
                </div>
            </div>

        </div>

    </div>
}

export default EmailViewer