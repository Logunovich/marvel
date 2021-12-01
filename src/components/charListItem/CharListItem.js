import './CharListItem.css';

const CharListItem = ({name, img, classImg, id, curId}) => {
    let classBlock = "char__block";
    if (id === curId) {
        classBlock += ' char__block-active'
    }
    return (
        <div className={classBlock}>
                <img className={`char__block_img${classImg}`} src={img} alt="img" />
                <div className="char__block_text">{name}</div>            
        </div>
    )
}

export default CharListItem;