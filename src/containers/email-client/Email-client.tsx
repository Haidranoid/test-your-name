import React, {FC, useEffect, useState} from "react";
import faker from "faker"
import useActions from "../../state/hooks/use-actions";
import useTypedSelector from "../../state/hooks/use-typed-selector";
import Select from "../../components/select/Select";
import SearchBar from "../../components/search-bar/SearchBar";
import Badge from "../../components/badge/Badge";
import EmailViewer from "../../components/email-viewer/EmailViewer";
import EmailList from "../../components/email-list/EmailList";
import {IEmail} from "../../state/interfaces/emails";
import email from "../../static/images/email.svg"

import "./styles.sass"

const EmailClient: FC = () => {
    const {getEmails, createEmail, updateEmail} = useActions()
    const {emails} = useTypedSelector(state => state.emailsState)

    const [title, setTitle] = useState('Inbox')
    const [emailSelected, setEmailSelected] = useState<IEmail | null>(null)
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        getEmails()
    }, [])

    useEffect(() => {
        setInterval(() => {
            for (let i = 0; i <= 1; i++)
                createEmail({
                    id: faker.datatype.uuid(),
                    from: faker.internet.email(),
                    to: faker.internet.email(),
                    subject: faker.company.companyName(),
                    body: faker.lorem.words(100),
                    date: `${faker.datatype.number({min: 1, max: 30})}/${faker.datatype.number({
                        min: 1,
                        max: 12
                    })}/2021`,
                    isRead: false,
                    avatar: faker.internet.avatar(),
                    tag: faker.music.genre(),
                    attachments: [{
                        file: faker.internet.url(),
                        name: faker.image.image()
                    }],
                })


        }, 9000)
    }, [])

    const handleEmailSelected = (email: IEmail) => {
        const emailUpdated: IEmail = {
            ...email,
            isRead: true
        }

        updateEmail(email.id, emailUpdated)
        setEmailSelected(email)
    }

    return <div className="flex-centered">
        <div className="container inbox-container shadow bordered">
            <div className="flex-centered">

                <div className="left-panel light-shadow">
                    <div className="flex padding">
                        <div className="flex-item-1">
                            <span> {title}{" "} </span>
                            {title === "Inbox" && <Badge value={emails.filter(e => !e.isRead).length}/>}
                        </div>
                        <div className="flex-item-1 text-right">
                            <div className="flex-centered"
                                 style={{justifyContent: "flex-end"}}>
                                <Select options={['Inbox', 'Spam', 'Deleted']}
                                        onChange={option => {
                                            //TODO
                                            setTitle(option)
                                            console.log(option)
                                        }}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex padding">
                        <SearchBar onSubmit={input => setSearchInput(input)}/>
                    </div>
                    <div style={{height: '65vh', overflowY: "auto"}}>
                        <EmailList emails={emails} searchInput={searchInput} onEmailSelected={handleEmailSelected}/>
                    </div>
                </div>

                <div className="right-panel">
                    {emailSelected
                        ? <EmailViewer email={emailSelected}/>
                        : <div className="flex-centered">
                            <img src={email}
                                 alt="not found"
                                 width="40px"
                                 height="40px"/>
                        </div>}
                </div>
            </div>
        </div>
    </div>
}

export default EmailClient;