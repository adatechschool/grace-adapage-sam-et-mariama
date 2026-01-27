import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header(){
    return(
        <div className={styles.header}>
            <Link to = {'/'}>
            <h1 className='logo'>LOGO</h1>
            </Link>
            <div className='buttons'>
            <Link to={"/chronologie"}>
            <button>Chronologie</button>
            </Link>
            <Link to={"/caracteristiques"}>
            <button>Caractéristiques</button>
            </Link>
            <Link to={"/ankamaverse"}>
            <button>AnkamaVerse</button>
            </Link>
            </div>
        </div>
    )
}