import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chronologie from './Pages/Chronologie.tsx'
import Caracteristiques from './Pages/Caracteristiques.tsx'
import AnkamaVerse from './Pages/AnkamaVerse.tsx'
import NotFoundPage from './Pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/chronologie", element: <Chronologie />},
  {path:"/caracteristiques", element: <Caracteristiques />},
  {path:"/ankamaverse", element: <AnkamaVerse />},
  {path:"*", element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
