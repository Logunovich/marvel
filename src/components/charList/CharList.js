import { Component } from 'react';
import './CharList.css';
import CharListItem from '../charListItem/CharListItem';
import MarvelService from '../services/MarvelService';
import Spinner from '../spinner/Spinner';

class CharList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            loading: true,
            newItemLoading: false,
            offset: 210
        }
    }
    

    marvelService = new MarvelService();

    getCharacters = (newArr) => {
        this.setState(({arr, offset}) => ({
            arr: [...arr, ...newArr],
            loading: false,
            newItemLoading: false,
            offset: offset + 9
        }))
    }

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.getCharacters)
            .catch(() => console.log('error'))
    }

    onCharListLoading() {
        this.setState({
            newItemLoading: true
        })
    }


    render() {
        const {arr, newItemLoading, offset} = this.state;
        let notFoundImg = ' img__not-found';
        const loading = this.state.loading ? <Spinner/> : null;

        const charItems = arr.map(item => {
            return (
                <div key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}>
                    <CharListItem
                        id={item.id}
                        curId={this.props.charId}
                        name={item.name.length>25?`${item.name.substr(0, 25)}...`:item.name}
                        img={item.thumbnail}
                        classImg={item.thumbnail.includes('not_available')?notFoundImg:''}
                    />
                </div>  
            )
            
        })
        return (
            <div className="char_list">
                {loading}
                <div className="char__list_container">
                    {charItems}
                </div>
                <button 
                    className="randomchar__container_btn randomchar__container_btn-load-more"
                    disabled={newItemLoading}
                    onClick={() => this.onRequest(offset)}>
                        Load more</button>
            </div>
            
        )
    }    
}

export default CharList;