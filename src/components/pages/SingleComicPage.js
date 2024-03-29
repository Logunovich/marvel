import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../services/MarvelService';

import './singleComic.css';


const SingleComicPage = () => {

    const {comicId} = useParams();
    const [comic, setComic] = useState(null);

    const {loading, getComics} = useMarvelService(); 

    useEffect(() => {
        updateComic()
    },[comicId])



    const updateComic = () => {  
        getComics(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || !comic) ? <View comic={comic}/> : null;


    return (
        <>
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;
    
    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back" style={{'color':'black'}}>Back to all</Link>
        </div>
    )
}

export default SingleComicPage;