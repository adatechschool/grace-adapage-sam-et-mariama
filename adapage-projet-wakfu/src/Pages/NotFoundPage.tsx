import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import pandawa from "../assets/Images/DeessePandawa.png"

const NotFoundPage = () => {
    return(
        <div>
            <Header/>
            {/* <h1>NOT FOUND PAGE</h1> */}
            <Link to ={"/"}>
            {/* <button>Go Back Home</button> */}
            <img className="justify-self-center-safe rounded-3xl w-6xl" src={pandawa} alt={pandawa} />
            </Link>
             <Footer/>
        </div>
        
    )
}

export default NotFoundPage