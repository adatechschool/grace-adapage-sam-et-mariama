import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFoundPage = () => {
    return(
        <div>
            <h1>NOT FOUND PAGE</h1>
            <Link to ={"/"}>
            <button>Go Back Home</button>
            </Link>
             <Footer/>
        </div>
        
    )
}

export default NotFoundPage