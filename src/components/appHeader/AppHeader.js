import './AppHeader.css';

const AppHeader = () => {
    return (
        <div className="app__container">
            <div className="app__container_left">
                Marvel <span className="app__container-black">information portal</span>
            </div>
            <div className="app__container_right">
                <a href="https:r24.by/" className="app__container-active">Characters</a> / <a href="https:r24.by/">Comics</a></div>
        </div>
    )
}

export default AppHeader;