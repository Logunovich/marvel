import { useState, useEffect } from 'react';
import './CharList.css';
import CharListItem from '../charListItem/CharListItem';
import useMarvelService from '../services/MarvelService';
import Spinner from '../spinner/Spinner';

const CharList = (props) => {

    const [arr, setArr] = useState([]),
          [newItemLoading, setNewItemLoading] = useState(false),
          [offset, setOffset] = useState(210);    

    const {loading, getAllCharacters} = useMarvelService();

    const getCharacters = (newArr) => {
        setArr(arr => [...arr, ...newArr]);
        setNewItemLoading(false);
        setOffset(offset => {
            return offset + 9
        });
    }


    useEffect(() => {
        onRequest()
    }, []);

    const onRequest = (offset) => {
        setNewItemLoading(true);
        getAllCharacters(offset)
            .then(getCharacters);
    }

        let notFoundImg = ' img__not-found';
        const isLoading = loading ? <Spinner/> : null;

        const charItems = arr.map(item => {
            return (
                <div key={item.id}
                    onClick={() => props.onCharSelected(item.id)}>
                    <CharListItem
                        id={item.id}
                        curId={props.charId}
                        name={item.name.length>25?`${item.name.substr(0, 25)}...`:item.name}
                        img={item.thumbnail}
                        classImg={item.thumbnail.includes('not_available')?notFoundImg:''}
                    />
                </div>  
            )
            
        })
        return (
            <div className="char_list">
                {isLoading}
                <div className="char__list_container">
                    {charItems}
                </div>
                <button 
                    className="randomchar__container_btn randomchar__container_btn-load-more"
                    disabled={newItemLoading}
                    onClick={() => onRequest(offset)}>
                        Load more</button>
            </div>
            
        )
    }   

export default CharList;