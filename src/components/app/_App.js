import { useState } from "react";
import AppHeader from "../appHeader/AppHeader.js";
import RandomChar from "../randomChar/RandomChar.js";
import CharList from "../charList/CharList.js";
import CharInfo from "../charInfo/CharInfo.js";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import './app.css';


const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="container">
            <AppHeader/>
            <RandomChar/>
            <div className="main__block">
                <CharList 
                    charId={selectedChar}
                    onCharSelected={onCharSelected}/>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
                
            </div>
        </div>
    )
}

export default App;