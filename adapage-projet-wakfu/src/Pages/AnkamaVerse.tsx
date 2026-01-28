import Header from "../components/Header";
import Footer from "../components/Footer";


import ankamaVerse from "../data/ankamaVerse";
import { useState } from "react";



function AnkamaVerse(){
  const [avatars, setAvatars] = useState(ankamaVerse)
    return(
        <>
        <Header />
        {avatars.map((avatar) => {
          return(
            <div key= {avatar.id}>
              <div id="avatar-text-container">
                <h1>{avatar.name}</h1>
                <p>{avatar.label}</p>
              </div>
              <img src={avatar.image} alt={avatar.name} />
            </div>
          )
        })}
        <Footer/>
        </>
    )
}

export default AnkamaVerse