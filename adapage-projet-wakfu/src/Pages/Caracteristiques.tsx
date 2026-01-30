import Header from "../components/Header";
import Footer from "../components/Footer";
import { caracteristique } from "../data/caracteristique";
import degat from "../assets/Images/2.png"
import amelioration from "../assets/Images/3.png"
import placement from "../assets/Images/6.png"
import dieuIop from "../assets/Images/dieu-iop.png"
import apparence from "../assets/Images/Apparence.jpg"
import pouvoir from "../assets/Images/pouvoirIop.webp"
import legende from "../assets/Images/legendeIop.jpg"
import dieuIop2 from "../assets/Images/DieuIop2 - copie.jpg"

interface Physique {
  titre: string;
  genre: string;
  cheveux: string;
  apparence: string;
}

interface Personnalite {
  titre: string;
  sagesse: string;
  loyauté: string;
  inspirant: string;
  personalite: string;
}

interface Pouvoir {
  titre: string;
  immortalité: string;
  avatar: {
    avatars: {
      titre: string;
      descpt: string;
    }[];
  };
  dieu: {
    titre: string;
    descrpt: string;
  };
  force: {
    titre: string;
    descrpt: string;
  };
}

interface Legende {
  titre: string;
  descrpt1: string;
  descrpt2: string;
  descrpt3: string;
}

interface Caracteristique {
  id: number;
  replique: string;
  physique: Physique;
  personalite?: Personnalite;
  pouvoir?: Pouvoir;
  legende?: Legende;
}

function Caracteristiques() {
  return (
    <>
    <div className="w-full mx-auto py-6 px-4 relative bg-gray-900 text-center">
      <Header />

      

        {/* Titre principal - responsive */}
        <div className="w-full mx-auto py-8 md:py-12 px-4 relative bg-gray-900 text-center">
                <h1 className="text-3xl md:text-6xl font-bold mb-2 text-yellow-500 uppercase">Caractéristiques</h1>
        </div>

        {/* Grid 2 colonnes avec cartes de même hauteur */}
        <div className="w-full grid grid-cols-2 gap-4 items-stretch mx-auto">
          {caracteristique.map((Caract) => (
            <>
              {/* carte01 — Physique + Personnalité */}
              <div
                key={`${Caract.id}-physique`}
                className="p-7 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
              >
                <div className="w-20 self-center">
                  <img src={degat} alt={degat} />
                </div>
                <h2 className="text-base text-yellow-500 font-bold mb-2">
                  {Caract.physique.titre}
                </h2>
                <li className="text-xs p-1 text-justify">{Caract.physique.apparence}</li>
                {Caract.personnalite && (
                  <li className="text-xs p-1 text-justify">{Caract.personnalite.personnalite}</li>
                )}
                    <div className="mt-3">
                        <div className="bg-linear-to-br from-black to-red-950 rounded-2xl overflow-hidden border border-yellow-600">
                            <img 
                            className="w-full object-cover object-center" 
                            src={apparence} 
                            alt={apparence} 
                            />
                        </div>
                    </div>
              </div>

              {/* carte02 — Pouvoir */}
              {Caract.pouvoir && (
                <div
                  key={`${Caract.id}-pouvoir`}
                  className="p-7 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
                >
                  <div className="w-20 self-center">
                  <img src={amelioration} alt={amelioration} />
                </div>
                  <h2 className="text-base text-yellow-500 font-bold mb-2">
                    {Caract.pouvoir.titre}
                  </h2>
                  <li className="text-xs p-1 text-justify">{Caract.pouvoir.immortalité}</li>

                  {Caract.pouvoir.avatar.avatars.map((a, idx) => (
                    <li key={idx} className="text-xs p-1 text-justify">
                      <strong>{a.titre} :</strong> {a.descpt}
                    </li>
                  ))}
                    <div className="mt-3">
                        <div className="bg-linear-to-br from-black to-red-950 rounded-2xl overflow-hidden border border-yellow-600">
                            <img 
                            className="w-full object-cover object-center" 
                            src={pouvoir} 
                            alt={pouvoir} 
                            />
                        </div>
                    </div>
                </div>
              )}

              {/* carte03 — Légende */}
              {Caract.legende && (
                <div
                  key={`${Caract.id}-legende`}
                  className="p-7 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
                >
                  <div className="w-20 self-center">
                  <img src={placement} alt={placement} />
                </div>
                  <h2 className="text-base text-yellow-500 font-bold mb-2">
                    {Caract.legende.titre}
                  </h2>
                  <li className="text-xs p-1 text-justify">{Caract.legende.descrpt1}</li>
                  <li className="text-xs p-1 text-justify">{Caract.legende.descrpt2}</li>
                  <li className="text-xs p-1 text-justify">{Caract.legende.descrpt3}</li>

                  <div className="mt-3">
                        <div className="bg-linear-to-br from-black to-red-950 rounded-2xl overflow-hidden border border-yellow-600">
                            <img 
                            className="w-full object-cover object-center" 
                            src={legende} 
                            alt={legende} 
                            />
                        </div>
                    </div>
                </div>
              )}

              {/* carte04 — Pouvoirs du dieu Iop */}
              <div
                key={`${Caract.id}-pouvoir-dieu-iop`}
                className="p-7 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
              >
                <div className="w-20 self-center">
                  <img src={dieuIop} alt={dieuIop} />
                </div>
                <h2 className="text-base text-yellow-500 font-bold mb-2">
                  Pouvoirs du dieu Iop
                </h2>
                <li className="text-xs p-1 text-justify">
                  Goultard hérite des pouvoirs de son père, le dieu Iop, les transmet à Tristepin en 988, mais les récupère après la blessure de son disciple, restant ainsi le plus puissant des dieux.
                </li>
                <div className="mt-3">
                        <div className="bg-linear-to-br from-black to-red-950 rounded-2xl overflow-hidden border border-yellow-600">
                            <img 
                            className="w-full object-cover object-center" 
                            src={dieuIop2} 
                            alt={dieuIop2} 
                            />
                        </div>
                    </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <Footer />
    
    </>
  );
}

export default Caracteristiques;
