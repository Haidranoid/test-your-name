import React, {FC} from "react";
import {IEmail} from "../../state/interfaces/emails";
import EmailCard from "../email-card/EmailCard";

interface EmailListProps {
    emails: IEmail[];
    searchInput: string;
    onEmailSelected: (email: IEmail) => void
}

const EmailList: FC<EmailListProps> = ({emails, searchInput, onEmailSelected}) => {
    return <>
        {emails.filter(email => (email.subject.toUpperCase().includes(searchInput.toUpperCase())))
            .map(email => <EmailCard
                key={email.id}
                email={email}
                onSelected={() => onEmailSelected(email)}/>)}
    </>
}

export default EmailList