import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader.js";
import './app.css';
import {MainPage, ComicsPage} from '../pages';


const App = () => {



    return (
        <Router>
            <div className="container">
                <AppHeader/>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route exact path="/comics">
                        <ComicsPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;