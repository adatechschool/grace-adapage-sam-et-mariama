
import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import description from './data/description'
import Repliques from './components/Repliques'
import Footer from "./components/Footer"
/* import goultarddesert from "./scrimagedecor/goultarddesert.png"; */

function App() {
  

  
  return (
    <>
    <div className="w-full mx-auto py-6 px-4 relative bg-gray-900 text-center">
    <Header />
    <h1>{description.name}</h1>
    <Repliques/>
    <div>
       <div
    className="grid grid-cols-1 sm:grid-cols-2  gap-6 p-4">
      <div>
      <h2>Description</h2>
          <div>
          <h3>Surnom</h3>
          <p>{description.surnom}</p>
          <h3>Age</h3>
          <p>{description.age}</p>
          <h3>Origine</h3>
          <p>{description.origines}</p>
          <h3>Classe</h3>
          <p>{description.classe}</p>
          <h3>Époque</h3>
          <p>{description.epoque}</p>
          <h3>Roles</h3>
          <p>{description.roles}</p>
          <h3>Naissance</h3>
          <p>{description.naissance}</p>
          <h3>Décès</h3>
          <p>{description.deces}</p>
          <h3>Statut</h3>
          <p>{description.statut}</p>
          </div>
      </div>
      <img src={description.img} alt="Photo Goultard" />
    </div>

     <Footer/>
   
    </div>
    </div>
     </>
  )
}

export default App
