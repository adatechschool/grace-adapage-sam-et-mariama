import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chronologie from './components/Chronologie.tsx'
import Caracteristiques from './components/Caracteristiques.tsx'
import AnkamaVerse from './components/AnkamaVerse.tsx'

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/chronoligie", element: <Chronologie />},
  {path:"/caracteristiques", element: <Caracteristiques />},
  {path:"/AnkamaVerse", element: <AnkamaVerse />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
