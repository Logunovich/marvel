import './sceleton.css';
import img from '../img/sceleton.jpg';

const Sceleton = () => {
    return (
        <div className="sceleton__block">
            <p>Please select a character to see information</p>
            <img className="sceleton__block_img" src={img} alt="sceleton" />
        </div>
    )
}

export default Sceleton;