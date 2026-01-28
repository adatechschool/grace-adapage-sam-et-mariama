import { Link } from 'react-router-dom'
import styles from './header.module.css'
import logo from '../assets/LOGO-GOULTARD-05.svg'

export default function Header(){
    return(
        <div className= {styles.header}>
            <Link to = {'/'}>
            <img src={logo} alt="logo goultard" className='h-20'/>
            {/* <h1 className='logo'>LOGO</h1> */}
            </Link>
            <div className='buttons flex gap-2 '>
            <Link to={"/chronologie"}>
            <button className="
    inline-flex items-center justify-center
     px-1.5 py-0.25
    text-base font-semibold
    text-black
    bg-red-900
    rounded-xl
    hover:bg-red-950
    transition
  " >Chronologie</button>
            </Link>

            <Link to={"/caracteristiques"}>
            <button className="
    inline-flex items-center justify-center
    px-1.5 py-0.25
    text-base font-semibold
    text-black
    bg-red-900
    rounded-xl
    hover:bg-red-950
    transition
  ">Caractéristiques</button>
            </Link>
            
            <Link to={"/ankamaverse"}>
            <button  className="
    inline-flex items-center justify-center
    px-1.5 py-0.25
    text-base font-semibold
    text-black
    bg-red-900
    rounded-xl
    hover:bg-red-950
    transition
  ">AnkamaVerse</button>
            </Link>
            </div>
        </div>
    )
}