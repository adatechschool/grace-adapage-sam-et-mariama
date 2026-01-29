import Header from "../components/Header";
import Footer from "../components/Footer";


import ankamaVerse from "../data/ankamaVerse";
import { useState } from "react";



function AnkamaVerse(){
  const [avatars, setAvatars] = useState(ankamaVerse)

    return(
      
        <div className="min-h-screen flex flex-col">
      
        <Header  />
         <div className="w-full mx-auto py-12 px-4 relative bg-gray-900"></div>
        <main className="flex-1 p-4 justify-centerrelative bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 justify-items-center">
  {avatars.map((avatar) => (
    <div
      key={avatar.id}
      className="bg-linear-to-br from-gray-900 via-red-950 to-gray-900 p-6 rounded-2xl text-white border border-yellow-600 rounded-lg shadow-md overflow-hidden flex flex-col items-center "
    >
      <img
        
      />
      <div id="avatar-text-container" className="p-4 text-center">
        <h1 className="text-lg font-bold">{avatar.name}</h1>
        <p className="text-gray-600">{avatar.label}</p>
      </div>
    </div>
  ))}
</div>

        </main>
        <Footer/></div>
      
    )
}

export default AnkamaVerse