import React, {FC} from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import history from "../history";
import EmailsList from "./emails-list/EmailsList";

const App: FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={"/"} component={EmailsList}/>
            </Switch>
        </Router>
    );
};

export default App;
