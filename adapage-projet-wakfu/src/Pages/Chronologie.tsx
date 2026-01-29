import { useState } from "react";
import Header from "../components/Header";
import chronologie from "../data/chronologie";
import Footer from "../components/Footer";

function Chronologie(){
    const [chronos, setChronos] = useState(chronologie)
 return(
 <>
 <Header />
 {chronos.map((chrono)=>{
    const isPair = (chrono.id % 2 === 0);
    if(isPair){
   return(
        <>
        <div key= {chrono.id} className="flex justify-evenly relative gap-2">
            <div className="mt-8 content-center w-100 align-center bg-amber-300">
                <h1 className="text-[12px]">{chrono.titre}</h1>
                <h2 className="text-[12px]">{chrono.date}</h2>
                <p className="text-[10px]">{chrono.descrpt}</p>
            </div>
            
            <div className="relative w-2 align-center bg-amber-500">
                {/* <div className="absolute w-6 h-6 rounded-full bg-amber-500 z-10"></div> */}
            </div>
            
            <div className=" h-50 w-100 align-center bg-red-400 justify-items-center content-center mt-8">
                <img  className="h-50 w-50 bg-amber-950" src={chrono.image} alt={chrono.titre} />
            </div>
        </div>
        </>
    )
    } 
    else{
        return(
        <>
        <div key= {chrono.id} className="flex justify-evenly relative gap-2">
            
            <div className=" h-50 w-100 align-center bg-red-400 justify-items-center content-center mt-8">
                <img  className="h-50 w-50 bg-amber-950" src={chrono.image} alt={chrono.titre} />
            </div>

            <div className="w-2 align-center bg-amber-500"></div>

            <div className="mt-8 content-center w-100 align-center bg-amber-300">
                <h1 className="text-[12px]">{chrono.titre}</h1>
                <h2 className="text-[12px]">{chrono.date}</h2>
                <p className="text-[10px]">{chrono.descrpt}</p>
            </div>
        </div>
        </>
    )
    }
 
 })}
 
 <Footer/>
 </>)
 
}

export default Chronologie