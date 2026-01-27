import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import description from './DATA/description'
import Repliques from './components/Repliques'


function App() {
  

  
  return (
    <>
    <Header />
    <h1>{description.name}</h1>
    <Repliques/>
    <div>
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
    </>
  )
}

export default App
