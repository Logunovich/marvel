import { useState, useEffect } from 'react';
import './CharInfo.css';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../services/MarvelService';
import Sceleton from '../sceleton/Sceleton';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const {loading, getCharacter} = useMarvelService(); 

    useEffect(() => {
        updateChar()
    },[props.charId])



    const updateChar = () => {  

        const {charId} = props;
        if (!charId) {
            return;
        }


        getCharacter(charId)
            .then(onChatLoaded)
    }

    const onChatLoaded = (char) => {
        setChar(char);
    }

        const sceleton = char || loading ? null : <Sceleton/>;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || !char) ? <View char={char}/> : null;

        return (
            <div className="container__info">
                <div className="char__info_block">
                    {sceleton}
                    {spinner}
                    {content}
                </div>
                {/* <div className="find__by_name">
                    <p>Of find a character by name:</p>
                    <input className="find__by_name-input" type="text" placeHolder="Enter name" /> <button className="randomchar__container_btn find__container_btn">find</button>
                </div> */}
            </div>
        )
    }


const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const noCommics = () => {
        return (
            comics.length < 1 ? <li>No comics</li> : null
        )
    }

    return (
        <>
            <div className="char__info_block-top">
                    <div className="char__info_img">
                        <img src={thumbnail} alt={name} />
                    </div>
                    <div className="char__info_title">
                        <span className="randomchar__container_left-title">{name}</span> <br />
                        <button className="randomchar__container_btn char__info_btn_home"><a href={homepage}>Homepage</a></button> <br />
                        <button className="randomchar__container_btn char__info_btn_wiki"><a href={wiki}>Homepage</a></button>
                    </div>
                </div>
                <div className="char__info_block-main">
                    <p className="char__info_block-text">{description}</p>
                </div>
                <div className="char__info_block_comics">
                    <h3>Comics:</h3>
                    <ul>
                        {noCommics()}
                        {
                            comics.map((item, i) => {
                                if (i>9){
                                    return;
                                }
                                return (
                                    <li key={i}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
    )
}

export default CharInfo;