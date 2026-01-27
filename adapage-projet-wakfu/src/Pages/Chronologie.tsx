import { useState } from "react";
import Header from "../components/Header"
import chronologie from "../DATA/chronologie";

function Chronologie(){
    const [chronos, setChronos] = useState(chronologie)
 return(
 <>
 <Header />
 <h1>Chronologie</h1>
 {chronos.map((chrono)=>{
    return(
        <div key= {chrono.id}>
        <h1>{chrono.titre}</h1>
        <h2>{chrono.date}</h2>
        <p>{chrono.descrpt}</p>
        <img src={chrono.image} alt={chrono.titre} />
        <p>---------</p>
        </div>
    )
 })}
 </>)
}

export default Chronologie