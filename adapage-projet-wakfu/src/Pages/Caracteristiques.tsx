import Header from "../components/Header";
import Footer from "../components/Footer_temp"
import  caracteristique  from "../data/caracteristique";



interface Physique {
    physique:{titre:string;
    genre:string;
    cheveux:string;
    apparence:string;}
};
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

/* interface Caracteristique {
  id: number;
  replique: string;
  physique: Physique;
  personalite?: Personnalite;
  pouvoir?: Pouvoir;
  legende?: Legende;
  exploit?: Exploit[];
} */
function Caracteristiques(){

return(
   <>
      <Header />
      <h1>Caractéristiques</h1>

      {caracteristique.map((Caract) => (
        <div key={Caract.id}>
          <h2>{Caract.physique.titre}</h2>
          <p>{Caract.physique.genre}</p>
          <p>{Caract.physique.cheveux}</p>
          <p>{Caract.physique.apparence}</p>
        

          {Caract.personnalite && (
            <>
              <h3>{Caract.personnalite.titre}</h3>
              <p>{Caract.personnalite.sagesse}</p>
              <p>{Caract.personnalite.loyauté}</p>
              <p>{Caract.personnalite.inspirant}</p>
              <p>{Caract.personnalite.personnalite}</p>
            </>
          )}
{/* {Caract.Caracteristique && (
            <>
              <h3>{Caract.Caracteristique.titre}</h3>
              <p>{Caract.Caracteristique.sagesse}</p>
              <p>{Caract.personnalite.loyauté}</p>
              <p>{Caract.personnalite.inspirant}</p>
              <p>{Caract.personnalite.personnalite}</p>
            </>
          )} */}
          {Caract.pouvoir && (
            <>
              <h3>{Caract.pouvoir.titre}</h3>
              <p>{Caract.pouvoir.immortalité}</p>
              {Caract.pouvoir.avatar.avatars.map((a, idx) => (
                <p key={idx}>
                  <strong>{a.titre} :</strong> {a.descpt}
                </p>
              ))}
            </>
          )}
        </div>
      ))}
      

      <Footer />
    </>
  );
}

export default Caracteristiques