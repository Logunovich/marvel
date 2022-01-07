import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader.js";
import './app.css';
import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';


const App = () => {

    return (
        <Router>
            <div className="container">
                <AppHeader/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/comics" element={<ComicsPage/>}/>
                    <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;