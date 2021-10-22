import React, {FC} from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import history from "../history";
import EmailClient from "./email-client/Email-client";

const App: FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={"/"} component={EmailClient}/>
            </Switch>
        </Router>
    );
};

export default App;
