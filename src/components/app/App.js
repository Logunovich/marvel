import { Component } from "react";
import AppHeader from "../appHeader/AppHeader.js";
import RandomChar from "../randomChar/RandomChar.js";
import CharList from "../charList/CharList.js";
import CharInfo from "../charInfo/CharInfo.js";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import './app.css';


class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="container">
                <AppHeader/>
                <RandomChar/>
                <div className="main__block">
                    <CharList 
                        charId={this.state.selectedChar}
                        onCharSelected={this.onCharSelected}/>
                    <ErrorBoundary>
                        <CharInfo charId={this.state.selectedChar}/>
                    </ErrorBoundary>
                    
                </div>
            </div>
    
        )
    }
}

export default App;