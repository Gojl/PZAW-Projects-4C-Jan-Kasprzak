import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Film from './film.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div className='films'>

    <Film name="Jak Ukraść Księżyc" year={2010} url="https://fwcdn.pl/fpo/47/74/494774/7333372_2.3.jpg" />
    <Film name="Minionki rozrabiają" year={2013} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSry-HzXDsSCwBz8xEt_BJxAVIvQpj7PgMJF1breYfIrw&s" />
    <Film name="Minionki " year={2015} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMbvdz9qitYZRnvzUA3jbWnp4AkcL6UMO-gWVszH7Zw&s=10" />
    </div>
  </StrictMode>,
)
