import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMarvelService from "../services/MarvelService";
import Spinner from "../spinner/Spinner";
import './comicsList.css';

const ComicsList = () => {
    const [arr, setArr] = useState([]);
    const [offset, setOffset] = useState(0);
    const {loading, getAllComics} = useMarvelService();
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false)

    useEffect(() => {
        onRequest()
    }, []);

    const getComics = (newArr) => {
        setArr(arr => [...arr, ...newArr]);
        setNewItemLoading(false);
        setFirstLoad(true)
        setOffset(offset => {
            return offset + 8
        });
    }

    const onRequest = (offset) => {
        setNewItemLoading(true);
        getAllComics(offset)
            .then(getComics)
    }

    const isLoading = loading && !firstLoad ? <Spinner/> : null;
    const comicsListFinal = arr.map((item, id) => {
        return (
            <li className="comics__item" key={id}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
        )
    })

    return (
        <div>
            {isLoading}
            <ul className="comics__grid">
                {comicsListFinal}
            </ul>
            <button 
                className="randomchar__container_btn randomchar__container_btn-load-more"
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}>
                Load more
            </button>
        </div>
    )
}

export default ComicsList;