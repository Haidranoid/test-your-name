import React, {FC, useEffect} from "react";
import useActions from "../../state/hooks/use-actions";
//import useTypedSelector from "../../state/hooks/use-typed-selector";
import EmailsFilter from "../../components/emails-filter/EmailsFilter";
import SearchBar from "../../components/search-bar/SearchBar";
import Badge from "../../components/badge/Badge";

import "./styles.sass"

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
                            <span> Inbox{" "}</span>
                            <div style={{display: "inline-block"}}>
                                <Badge value={3}/>
                            </div>
                        </div>
                        <div className="flex-item-1 text-right">
                            <div className="flex-centered" style={{justifyContent: "flex-end"}}>
                                <EmailsFilter filter={""} emails={[]}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex padding">
                        <SearchBar/>
                    </div>
                    <hr/>
                    <div>
                        dfa
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