import React, {FC, useEffect} from "react";
import useActions from "../../state/hooks/use-actions";
//import useTypedSelector from "../../state/hooks/use-typed-selector";
import Select from "../../components/emails-filter/Select";
import SearchBar from "../../components/search-bar/SearchBar";
import Badge from "../../components/badge/Badge";

import "./styles.sass"
import EmailCard from "../../components/email-card/EmailCard";

const EmailsList: FC = () => {
    const {getEmails} = useActions()
    //const {emails} = useTypedSelector(state => state.emailsState)

    useEffect(() => {
        getEmails()
    }, [])

    return <div className="flex-centered">
        <div className="container inbox-container shadow bordered">
            <div className="flex-centered">

                <div className="left-panel light-shadow">
                    <div className="panel-header flex padding">
                        <div className="flex-item-1">
                            <span> Inbox{" "} </span>
                            <Badge value={3}/>
                        </div>
                        <div className="flex-item-1 text-right">
                            <div className="flex-centered" style={{justifyContent: "flex-end"}}>
                                <Select options={['Inbox', 'Spam', 'Deleted']}
                                        onChange={option => {
                                            //TODO
                                            console.log(option)
                                        }}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex padding">
                        <SearchBar/>
                    </div>
                    <hr/>
                    <div>
                        <EmailCard/>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="panel-header flex padding">

                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    </div>
}

export default EmailsList;