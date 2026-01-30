import { useState } from "react";
import logoLeft from "../assets/logo-footer/Wakfu_Logo.png";
import logoCenter from "../assets/logo-footer/Ankama_Games_Logo_blanc.png";
import logoRight from "../assets/logo-footer/dofus-logo.png";

function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-50 py-6 relative">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 mb-4">
        <a href="https://wakfu.guide/" target="_blank" rel="noopener noreferrer">
          <img src={logoLeft} alt="Logo gauche" className="h-10" />
        </a>
        <a href="https://www.ankama.com" target="_blank" rel="noopener noreferrer">
          <img src={logoCenter} alt="Logo centre" className="h-10" />
        </a>
        <a
          href="https://www.dofus-retro.com/fr/mmorpg/decouvrir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoRight} alt="Logo droite" className="h-10" />
        </a>
      </div>

   
      <div className="text-center  relative">
        <span className="block font-extralight text-xs">Mentions légales</span>

        <div className="relative inline-block">
          <p
            onClick={() => setContactOpen(!contactOpen)}
            className="cursor-pointer text-yellow-500 hover:underline text-xs"
          >
            Infos supplémentaires
          </p>

          {contactOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
              <a
                href="https://wakfu.fandom.com/fr/wiki/Catégorie:Personnages/Univers"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-xs text-gray-50 hover:bg-gray-700"
              >
                Perso
              </a>
              <a
                href="https://krosmoz.fandom.com/fr/wiki/Krosmoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-xs text-gray-50 hover:bg-gray-700"
              >
                Univers
              </a>
              <a
                href="https://www.ankama-shop.com/fr/produits-derives-wakfu/4606-pack-les-legendes-du-krosmoz-dofus-wakfu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-xs text-gray-50 hover:bg-gray-700"
              >
                Jeux / Shop
              </a>
            </div>
          )}
        </div>

        <span className="block font-extralight text-xs">
          © SAM & Mariama 2026 — Projet Wakfu Goultard
        </span>
      </div>
    </footer>
  );
}

export default Footer;
