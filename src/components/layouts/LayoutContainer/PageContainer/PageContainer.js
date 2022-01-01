import { Switch, Route } from "react-router-dom";
import Applications from '../../../pages/Applications/Applications';
import Prototypes from '../../../pages/Prototypes/Prototypes';
import Components from '../../../pages/Components/Components';
import Services from '../../../pages/Services/Services';
import Database from '../../../pages/Database/Database';
import Tests from '../../../pages/Tests/Tests';
import Settings from '../../../pages/Settings/Settings';

export default function PageContainer() {

    const classes = `col h-100`;

    return (
        <div className={classes}>
            <Switch>
                <Route exact path="/">
                    <Applications />
                </Route>
                <Route path="/applications">
                    <Applications />
                </Route>
                <Route path="/prototypes">
                    <Prototypes />
                </Route>
                <Route path="/components">
                    <Components />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/database">
                    <Database />
                </Route>
                <Route path="/tests">
                    <Tests />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
            </Switch>
        </div>
    );
}