import { useState } from "react";
import Header from "../components/Header";
import chronologie from "../data/chronologie";
import Footer from "../components/Footer";

function Chronologie() {
  const [chronos, setChronos] = useState(chronologie);
  
  return (
    <> 
    <div className="w-full mx-auto py-6 px-4 relative bg-gray-900 text-center">
        <Header />
        <div className="w-full mx-auto py-12 px-4 relative bg-gray-900 text-center">
                <h1 className="text-6xl font-bold mb-2 text-yellow-500 uppercase">Chronologie</h1>
        </div>
        <div className="w-full mx-auto py-12 px-4 relative bg-gray-900">
            {/* Ligne centrale continue */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-600 via-red-600 to-yellow-600 transform -translate-x-1/2"></div>
            
            {chronos.map((chrono) => {
            const isPair = chrono.id % 2 === 0;
            
            if (isPair) {
                return (
                <div key={chrono.id} className="flex items-center gap-8 mb-16 relative">
                    
                    {/* Texte à gauche */}
                    <div className="w-5/12 ml-auto text-right">
                    <div className="bg-linear-to-br from-gray-900 via-red-950 to-gray-900 p-6 rounded-2xl text-white border border-yellow-600">
                        <h1 className="text-2xl font-bold mb-2 text-yellow-500 uppercase">{chrono.titre}</h1>
                        <h2 className="text-lg font-medium text-yellow-400 mb-3 uppercase">{chrono.date}</h2>
                        <p className="text-sm font-light leading-relaxed text-gray-300">{chrono.descrpt}</p>
                    </div>
                    </div>
                    
                    {/* Cercle sur la ligne */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-yellow-500 to-red-600 border-4 border-gray-900"></div>
                    </div>
                    
                    {/* Image à droite */}
                    <div className="w-5/12 mr-auto">
                    <div className="bg-linear-to-br from-black to-red-950 rounded-2xl overflow-hidden border border-yellow-600">
                        <img 
                        className="w-full h-full object-cover object-center" 
                        src={chrono.image} 
                        alt={chrono.titre} 
                        />
                    </div>
                    </div>
                </div>
                );
            } else {
                return (
                <div key={chrono.id} className="flex items-center gap-8 mb-16 relative">
                    {/* Image à gauche */}
                    <div className="w-5/12 ml-auto">
                    <div className="bg-linear-to-br from-black to-red-950 rounded-2xl overflow-hidden border border-yellow-600">
                        <img 
                        className="w-full h-full object-cover object-center" 
                        src={chrono.image} 
                        alt={chrono.titre} 
                        />
                    </div>
                    </div>
                    
                    {/* Cercle sur la ligne */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-yellow-500 to-red-600 border-4 border-gray-900"></div>
                    </div>
                    
                    {/* Texte à droite */}
                    <div className="w-5/12 mr-auto">
                    <div className="bg-linear-to-br from-gray-900 via-red-950 to-gray-900 p-6 rounded-2xl text-white border border-yellow-600">
                        <h1 className="text-2xl font-bold mb-2 text-yellow-500 uppercase">{chrono.titre}</h1>
                        <h2 className="text-lg font-medium text-yellow-400 mb-3 uppercase">{chrono.date}</h2>
                        <p className="text-sm font-light leading-relaxed text-gray-300">{chrono.descrpt}</p>
                    </div>
                    </div>
                </div>
                );
            }
            })}
        </div>
        <Footer />
    </div>
    </>
  );
}

export default Chronologie;