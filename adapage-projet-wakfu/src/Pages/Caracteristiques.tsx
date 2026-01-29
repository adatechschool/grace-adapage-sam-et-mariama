import Header from "../components/Header";
import Footer from "../components/Footer";
import { caracteristique } from "../data/caracteristique";

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

      <div className="w-full mx-auto py-12 px-4 relative bg-gray-900">
        <h1 className="text-2xl text-center font-bold text-yellow-500 mb-4">
          Caractéristiques
        </h1>

        {/* Grid 2 colonnes avec cartes de même hauteur */}
        <div className="w-full grid grid-cols-2 gap-4 items-stretch mx-auto">
          {caracteristique.map((Caract) => (
            <>
              {/* carte01 — Physique + Personnalité */}
              <div
                key={`${Caract.id}-physique`}
                className="p-4 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
              >
                <h2 className="text-base text-yellow-500 font-bold mb-2">
                  {Caract.physique.titre}
                </h2>
                <li className="text-xs p-1 text-justify">{Caract.physique.apparence}</li>
                {Caract.personnalite && (
                  <li className="text-xs p-1 text-justify">{Caract.personnalite.personnalite}</li>
                )}
              </div>

              {/* carte02 — Pouvoir */}
              {Caract.pouvoir && (
                <div
                  key={`${Caract.id}-pouvoir`}
                  className="p-4 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
                >
                  <h2 className="text-base text-yellow-500 font-bold mb-2">
                    {Caract.pouvoir.titre}
                  </h2>
                  <li className="text-xs p-1 text-justify">{Caract.pouvoir.immortalité}</li>

                  {Caract.pouvoir.avatar.avatars.map((a, idx) => (
                    <li key={idx} className="text-xs p-1 text-justify">
                      <strong>{a.titre} :</strong> {a.descpt}
                    </li>
                  ))}
                </div>
              )}

              {/* carte03 — Légende */}
              {Caract.legende && (
                <div
                  key={`${Caract.id}-legende`}
                  className="p-4 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
                >
                  <h2 className="text-base text-yellow-500 font-bold mb-2">
                    {Caract.legende.titre}
                  </h2>
                  <li className="text-xs p-1 text-justify">{Caract.legende.descrpt1}</li>
                  <li className="text-xs p-1 text-justify">{Caract.legende.descrpt2}</li>
                  <li className="text-xs p-1 text-justify">{Caract.legende.descrpt3}</li>
                </div>
              )}

              {/* carte04 — Pouvoirs du dieu Iop */}
              <div
                key={`${Caract.id}-pouvoir-dieu-iop`}
                className="p-4 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 rounded-2xl text-white border border-yellow-600 shadow flex flex-col h-full"
              >
                <h2 className="text-base text-yellow-500 font-bold mb-2">
                  Pouvoirs du dieu Iop
                </h2>
                <li className="text-xs p-1 text-justify">
                  Goultard hérite des pouvoirs de son père, le dieu Iop, les transmet à Tristepin en 988, mais les récupère après la blessure de son disciple, restant ainsi le plus puissant des dieux.
                </li>
              </div>
            </>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}

export default Caracteristiques;
