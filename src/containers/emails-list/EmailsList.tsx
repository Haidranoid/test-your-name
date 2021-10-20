import React, {FC, useEffect} from "react";
import useActions from "../../state/hooks/use-actions";
import useTypedSelector from "../../state/hooks/use-typed-selector";

const EmailsList: FC = () => {
    const {getEmails} = useActions()
    const {emails} = useTypedSelector(state => state.emailsState)

    useEffect(() => {
        getEmails()
    }, [])

    return <div>
        hola {console.log(emails)}
    </div>
}

export default EmailsList;