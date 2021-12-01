import img from './error.gif';

const ErrorMessage = () => {
    return (
        <div className="randomchar__container_left-error">
            <img className="error__img" style={{ width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto"}} src={img} alt="error"/>
        </div>
    )
}

export default ErrorMessage;