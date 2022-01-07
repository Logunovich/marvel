import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p>This page does not exist</p>
            <Link style={{'color': 'purple', 'fontSize': '30px'}} to="/">Back to the future</Link>
        </div>
    )
}

export default Page404;