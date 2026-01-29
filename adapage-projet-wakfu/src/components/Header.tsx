import { Link } from 'react-router-dom'
import logo from '../assets/LOGO-GOULTARD-04.svg'

export default function Header(){
    return(
        // <div className="w-full mx-auto py-6 px-2 relative bg-gray-900 text-center">
        <div className= "mx-4 px-2 py-2 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 h-25 flex items-center justify-between rounded-md sticky top-0 z-50">
            <Link to = {'/'}>
            <img src={logo} alt="logo goultard" className='h-20'/>
            {/* <h1 className='logo'>LOGO</h1> */}

            
            </Link>
            <div className='buttons flex gap-2 '>

             <Link to={"/"}>
            <button  className="uppercase inline-flex items-center  justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition">Accueil</button>
            </Link>

            <Link to={"/chronologie"}>
            <button className="uppercase inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition" >Chronologie</button>
            </Link>

            <Link to={"/caracteristiques"}>
            <button className="uppercase inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition">Caractéristiques</button>
            </Link>
            
            <Link to={"/ankamaverse"}>
            <button  className="uppercase inline-flex items-center  justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition">AnkamaVerse</button>
            </Link>
            </div>
        </div>
    // </div>
    )
}