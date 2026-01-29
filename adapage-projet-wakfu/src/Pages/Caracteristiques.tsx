import Header from "../components/Header";

import Footer from "../components/Footer"
import { caracteristique } from "../data/caracteristique";





interface Physique {
  physique: {
    titre: string;
    genre: string;
    cheveux: string;
    apparence: string;
  };
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
    avatar: string[];
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

interface Exploit {
  titre: string;
  descrpt1: string;
  descrpt2: string;
}

interface Caracteristique {
  id: number;
  replique: string;
  physique: Physique;
  personalite?: Personnalite;
  pouvoir?: Pouvoir;
  legende?: Legende;
  exploit?: Exploit[];
}

function Caracteristiques() {
 return (
    <>
      <Header />

      <h1 className="text-xl text-center font-bold text-gray-500 mb-4">
        Caractéristiques
      </h1>

      {/* Centrer la colonne */}
      <div className="flex justify-center">
        <div className="w-3/4 flex flex-col gap-6">
          {caracteristique.map((Caract) => (
            <div key={Caract.id} className="flex flex-col gap-6">

              {/* catrte01 — Physique + Personnalité */}
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                
                <h2 className="p-6">{Caract.physique.titre}</h2>
                <p className="p-2">Genre : {Caract.physique.genre}</p>
                <p className="p-2">Couleur de cheveux : {Caract.physique.cheveux}</p>
                <p className="p-2">Physique & apparence : {Caract.physique.apparence}</p>

                {Caract.personnalite && (
                  <>
                    <h3 className="p-6">{Caract.personnalite.titre}</h3>
                    <p className="p-2">{Caract.personnalite.sagesse}</p>
                    <p className="p-2">{Caract.personnalite.loyauté}</p>
                    <p className="p-2">{Caract.personnalite.inspirant}</p>
                    <p className="p-2">{Caract.personnalite.personnalite}</p>
                  </>
                )}
              </div>

              {/* carte02 — Pouvoir */}
              {Caract.pouvoir && (
                <div className="p-6 bg-gray-50 rounded-xl shadow">
                
                  <div className="px-6">
                    <h3 className="p-6">{Caract.pouvoir.titre}</h3>
                    <p className="p-2">{Caract.pouvoir.immortalité}</p>

                    <div>
                      {Caract.pouvoir.avatar.avatars.map((a, idx) => (
                        <p key={idx} className="p-2">
                          <strong className="p-4">{a.titre} :</strong> {a.descpt}
                        </p>
                      ))}
                    </div>

                    <h3 className="p-6">{Caract.pouvoir.dieu.titre}</h3>
                    <p className="p-2">{Caract.pouvoir.dieu.descrpt}</p>

                    <h3 className="p-6">{Caract.pouvoir.force.titre}</h3>
                    <p className="p-2">{Caract.pouvoir.force.descrpt}</p>
                  </div>
                </div>
              )}

              {/* carte03 — Légende */}
              {Caract.legende && (
                <div className="p-6 bg-gray-50 rounded-xl shadow">
                  
                  <h3 className="p-6">{Caract.legende.titre}</h3>
                  <p className="p-2">{Caract.legende.descrpt1}</p>
                  <p className="p-2">{Caract.legende.descrpt2}</p>
                  <p className="p-2">{Caract.legende.descrpt3}</p>
                </div>
              )}

              {/* carte04 — Exploits */}
              {Caract.exploit && Caract.exploit.length > 0 && (
                <div className="p-6 bg-gray-50 rounded-xl shadow">
                  
                  {Caract.exploit.map((a, idx) => (
                    <div key={idx} className="mb-3">
                      <h3 className="p-6">{a.titre}</h3>
                      <p className="p-2">{a.descrpt1}</p>
                      <p className="p-2">{a.descrpt2}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Caracteristiques;