import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/LOGO-GOULTARD-04.svg'

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        <div className="mx-4 px-2 py-2 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 h-auto md:h-25 flex flex-wrap md:flex-nowrap items-center justify-between rounded-md sticky top-0 z-50">
            <Link to={'/'}>
                <img src={logo} alt="logo goultard" className='h-16 md:h-20'/>
            </Link>
            
            {/* Bouton hamburger pour mobile */}
            <button 
                className="md:hidden p-2 text-yellow-400 rounded-xl border border-yellow-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                Menu
            </button>

            {/* Menu navigation */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-2 w-full md:w-auto mt-2 md:mt-0`}>
                <Link to={"/"}>
                    <button className="w-full md:w-auto uppercase inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition">
                        Accueil
                    </button>
                </Link>
                <Link to={"/chronologie"}>
                    <button className="w-full md:w-auto uppercase inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition">
                        Chronologie
                    </button>
                </Link>
                <Link to={"/caracteristiques"}>
                    <button className="w-full md:w-auto uppercase inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition">
                        Caractéristiques
                    </button>
                </Link>
                <Link to={"/ankamaverse"}>
                    <button className="w-full md:w-auto uppercase inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-xl hover:bg-linear-to-br from-yellow-500 via-yellow-200 to-yellow-500 transition">
                        AnkamaVerse
                    </button>
                </Link>
            </div>
        </div>
    )
}