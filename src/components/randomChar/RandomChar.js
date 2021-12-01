import { Component } from 'react';
import './RandomChar.css';
import molot from '../img/molot.jpg';
import MarvelService from '../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage'

class RandomChar extends Component {

    state = {
        char: {},
        loading: true,
        error: true
    }
    
    marvelService = new MarvelService(); 

    componentDidMount() {
        this.updateChar();
    }

    onChatLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onChatLoaded)
            .catch(this.onError)
    }

    render () {
        let {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="randomchar__container">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__container_right">
                    <p className="randomchar__container_text">Random character for today! <br /> Do you want to get to know him better?</p> <br />
                    <p className="randomchar__container_text">Or choose another one</p> <br />
                    <button 
                        onClick={this.updateChar}
                        className="randomchar__container_btn randomchar__container_left-left">
                        Try it</button>
                    <div className="randomchar__container_right-img">
                        <img src={molot} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    let {name, description, thumbnail, homepage, wiki} = char;

    if (!description){
        description = 'Unfortunately, the description of this hero it not avalible. Try another hero!'
    }
    if (description.length > 200) {
        description = description.substr(0, 200) + '...'
    }
    
    let classImg = 'randomchar__container_left-img';
    if (thumbnail.includes('available')) {
        classImg += ' img__not-found';
    }

    return (
        <div className="randomchar__container_left">
            <div>
                <img className={classImg} src={thumbnail} alt="" />
            </div>
            <div className="randomchar__container_left-text">
                <span className="randomchar__container_left-title">{name}</span>
                <p>{description}</p>
                <div className="buttons__random_char">
                    <button className="randomchar__container_btn randomchar__container_left-left"><a href={homepage}>Homepage</a></button>
                    <button className="randomchar__container_btn randomchar__container_left-right"><a href={wiki}>Wiki</a></button>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;