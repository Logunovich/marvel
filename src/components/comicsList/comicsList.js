import { useState, useEffect } from "react";
import useMarvelService from "../services/MarvelService";
import Spinner from "../spinner/Spinner";
import './comicsList.css';

const ComicsList = () => {
    const [arr, setArr] = useState([]);
    const [offset, setOffset] = useState(0);
    const {loading, getAllComics} = useMarvelService();
    const [newItemLoading, setNewItemLoading] = useState(false);

    useEffect(() => {
        onRequest()
    }, []);

    const getComics = (newArr) => {
        setArr(arr => [...arr, ...newArr]);
        setNewItemLoading(false);
        setOffset(offset => {
            return offset + 8
        });
    }

    const onRequest = () => {
        setNewItemLoading(true);
        getAllComics(offset)
            .then(getComics)
    }

    const isLoading = loading ? <Spinner/> : null;
    const comicsListFinal = arr.map((item, id) => {
        return (
            <li className="comics__item" key={id}>
                    <a href="#">
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
        )
    })

    console.log(arr)

    return (
        <div>
            {isLoading}
            <ul className="comics__grid">
                {comicsListFinal}
            </ul>
            
        </div>
    )
}

export default ComicsList;