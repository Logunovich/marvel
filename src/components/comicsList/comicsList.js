import { useState, useEffect } from "react";
import useMarvelService from "../services/MarvelService";
import Spinner from "../spinner/Spinner";

const ComicsList = () => {
    const [arr, setArr] = useState([]);
    const {loading, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest()
    }, [])

    const onRequest = () => {
        getAllComics()
            .then(item => setArr(item))
    }

    const isLoading = loading ? <Spinner/> : null;
    const comicsListFinal = arr.map(item => {
        return (
            <p>{item.description}</p>
        )
    })

    return (
        <div>
            <Spinner/>
            {comicsListFinal}
        </div>
    )
}

export default ComicsList;