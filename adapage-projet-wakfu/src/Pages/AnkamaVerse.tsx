import Header from "../components/Header";
import Footer from "../components/Footer";


import ankamaVerse from "../data/ankamaVerse";
import { useState } from "react";



function AnkamaVerse(){
  const [avatars, setAvatars] = useState(ankamaVerse)

    return (

    <div className="w-full min-h-screen bg-gray-900 flex flex-col">
      <Header />

  <div className="w-full mx-auto py-8 md:py-12 px-4 relative bg-gray-900 text-center">
                <h1 className="text-3xl md:text-6xl font-bold mb-2 text-yellow-500 uppercase">AnkamaVerse</h1>
        </div>

      {/* CENTRAGE TOTAL */}
      <main className="flex-1 flex items-center justify-center">
        <div className="flex gap-6">

          {/* DIEU IOP */}
          {ankamaVerse
            .filter((a) => a.id === 0)
            .map((avatar) => (
              <div
                key={avatar.id}
                className="w-64 h-[420px] bg-linear-to-br from-gray-900 via-red-950 to-gray-900 p-6 rounded-2xl text-white border border-yellow-600 shadow-md flex flex-col items-center justify-between"
              >
                <h1 className="text-lg font-bold text-yellow-500 text-center">
                  {avatar.name}
                </h1>

                <p className="text-xs text-white text-center">
                  {avatar.label}
                </p>

                <img
                  src={avatar.image}
                  alt={avatar.name}
                  className="w-32 h-32 object-cover rounded-full"
                />

                <p className="text-xs text-white break-all text-center">
                  {avatar.link}
                </p>
              </div>
            ))}

          {/* GOULTARD L’ANCIEN */}
          {ankamaVerse
            .filter((a) => a.id === 1)
            .map((avatar) => (
              <div
                key={avatar.id}
                className="w-64 h-[420px] bg-linear-to-br from-gray-900 via-red-950 to-gray-900 p-6 rounded-2xl text-white border border-yellow-600 shadow-md flex flex-col items-center justify-between"
              >
                <h1 className="text-lg font-bold text-yellow-500 text-center">
                  {avatar.name}
                </h1>

                <p className="text-xs text-white text-center">
                  {avatar.label}
                </p>

                <img
                  src={avatar.image}
                  alt={avatar.name}
                  className="w-32 h-32 object-cover rounded-full"
                />

                <p className="text-xs text-white break-all text-center">
                  {avatar.link}
                </p>
              </div>
            ))}

          {/* GOULTARD LE PROTECTEUR + DARK VALD*/}
          <div className="relative w-64 h-[420px]">
            {ankamaVerse
              .filter((a) => a.id === 2 || a.id === 3)
              .map((avatar, index) => (
                <div
                  key={avatar.id}
                  className={`absolute inset-0 bg-linear-to-br from-gray-900 via-red-950 to-gray-900 p-6 rounded-2xl text-white border border-yellow-600 shadow-md flex flex-col items-center justify-between transition-opacity duration-300
                    ${
                      index === 0
                        ? "opacity-100 hover:opacity-0 z-10"
                        : "opacity-0 hover:opacity-100 z-20"
                    }
                  `}
                >
                  <h1 className="text-lg font-bold text-yellow-500 text-center">
                    {avatar.name}
                  </h1>

                  <p className="text-xs text-white text-center">
                    {avatar.label1}
                  </p>

                  <img
                    src={avatar.image}
                    alt={avatar.name}
                    className="w-32 h-32 object-cover rounded-full"
                  />

                  <p className="text-xs text-white break-all text-center">
                    {avatar.link}
                  </p>
                </div>
              ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AnkamaVerse;