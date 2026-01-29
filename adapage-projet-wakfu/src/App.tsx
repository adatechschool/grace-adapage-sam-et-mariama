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
      <div className="w-full mx-auto py-12 px-4 relative text-white bg-gray-900 text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-2 text-yellow-500 uppercase">{description.name}</h1>
      <Repliques/>
    </div>

    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 p-4">
          <div className='text-white  md:p-5 '>
              <h2 className="text-2xl font-bold mb-2 text-yellow-500 uppercase">Description</h2>
                  <div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500'>Surnom</h3>
                        <p>{description.surnom}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500' >Age</h3>
                        <p>{description.age}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500' >Origine</h3>
                        <p>{description.origines}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500' >Classe</h3>
                        <p>{description.classe}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500'>Époque</h3>
                        <p>{description.epoque}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500'>Roles</h3>
                        <p>{description.roles}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500'>Naissance</h3>
                        <p>{description.naissance}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500'>Décès</h3>
                        <p>{description.deces}</p>
                    </div>
                    <div className='border border-amber-500 rounded-2xl m-4 p-3'>
                        <h3 className='uppercase font-medium text-yellow-500'>Statut</h3>
                        <p>{description.statut}</p>
                    </div>
                  </div>
            </div>
            
          <img className='md:mt-20' src={description.img} alt="Photo Goultard" />
        </div>

        <Footer/>
      
      </div>
  </div>
  </>
  )
}

export default App
