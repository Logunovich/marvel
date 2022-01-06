import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader.js";
import RandomChar from "../randomChar/RandomChar.js";
import CharList from "../charList/CharList.js";
import CharInfo from "../charInfo/CharInfo.js";
import ComicsList from "../comicsList/comicsList.js";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import './app.css';


const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <Router>
            <div className="container">
                <AppHeader/>
                <Switch>
                    <Route exact path="/">
                        <RandomChar/>
                        <div className="main__block">
                            <CharList 
                                charId={selectedChar}
                                onCharSelected={onCharSelected}/>
                            <ErrorBoundary>
                                <CharInfo charId={selectedChar}/>
                            </ErrorBoundary>
                        </div>
                    </Route>
                    <Route exact path="/comics">
                        <ComicsList/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;