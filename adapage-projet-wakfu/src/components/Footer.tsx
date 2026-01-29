import logoLeft from "../assets/logo-footer/Wakfu_Logo.png";
import logoCenter from "../assets/logo-footer/Ankama_Games_Logo_blanc.png";
import logoRight from "../assets/logo-footer/dofus-logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-50 py-6">
      {/* Logos sur la même ligne */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 mb-4">
       <img src={logoLeft} alt="Logo gauche" className="h-10" /> 
        <img src={logoCenter} alt="Logo centre" className="h-10" />
        <img src={logoRight} alt="Logo droite" className="h-10" />
      </div>

      {/* Texte */}
      <div className="text-center space-y-1">
        <span className="block font-semibold">Mentions légales</span>
        <p>Contact</p>
        <p>© SAM & Mariama 2026 — Projet Wakfu Goultard</p>
      </div>
    </footer>
  );
}

export default Footer;
