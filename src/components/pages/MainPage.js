import RandomChar from "../randomChar/RandomChar.js";
import CharList from "../charList/CharList.js";
import CharInfo from "../charInfo/CharInfo.js";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { useState } from "react";

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <RandomChar/>
            <div className="main__block">
                <CharList 
                    charId={selectedChar}
                    onCharSelected={onCharSelected}/>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
            </div>
        </>
    )
}

export default MainPage;