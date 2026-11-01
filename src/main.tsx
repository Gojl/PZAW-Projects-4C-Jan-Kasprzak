import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Film from './film.tsx'
import Book from './book.tsx'
import Album from './album.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App name="Filmy" />
    <div className='films'>
    <Film name="Jak Ukraść Księżyc" year={2010} url="https://fwcdn.pl/fpo/47/74/494774/7333372_2.3.jpg" />
    <Film name="Minionki rozrabiają" year={2013} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSry-HzXDsSCwBz8xEt_BJxAVIvQpj7PgMJF1breYfIrw&s" />
    <Film name="Minionki " year={2015} url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMbvdz9qitYZRnvzUA3jbWnp4AkcL6UMO-gWVszH7Zw&s=10" />
    </div>  
    <br/>
    <App name="Książki" />
    <div className='books'>
    <Book cover="https://libris.to/media/jacket/44041660o.jpg" title="Mikołajek" releseYear={1960} pageNumber={356} />
    <Book cover="https://ecsmedia.pl/cir/n/wakacje-mikolajka-ZDJECIE_OKLADKI_PRZOD_DUZY/0204/14695243131640204.webp" title="Wakacje Mikołajka" releseYear={1962} pageNumber={310} />
    <Book cover="https://ecsmedia.pl/cir/n/mikolajek-i-inne-chlopaki-2170759171466740170/55da436262664a81bdfbc432a0683ab0.webp" title="Mikołajek i inne chłopaki" releseYear={1963} pageNumber={235} />
    </div>
    <br />
    <App name="Albums" />
    <div className='albums'>
    <Album title="bunny boy problems" genere="Rap" cover="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3f/90/3d/3f903d58-7e48-2355-ab06-e22aaf1a4a4c/26UM1IM16662.rgb.jpg/296x296bb.webp" artistName='stickxr' releseYear={2026} songs={[
      {title: "85", length: "1:28" },
      {title: "wait", length: "2:11" },
      {title: "głupia bae", length: "2:15" },
      {title: "payout", length: "2:42" },
      {title: "to nie ten stan", length: "1:45" },
      {title: "#bunnyfunny", length: "1:57" },
      {title: "to nie te myśli", length: "2:01" },
      {title: "fiji water angel神層", length: "2:14" },
      {title: "bettybop", length: "1:36" },
      {title: "go away", length: "1:59" },
      {title: "rip stickyboi85", length: "2:07" },
      {title: "rany", length: "1:25" },
      {title: "zamykam się", length: "2:08" },
      ]} /> 
    <Album title="bunny boy problems" genere="Rap" cover="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3f/90/3d/3f903d58-7e48-2355-ab06-e22aaf1a4a4c/26UM1IM16662.rgb.jpg/296x296bb.webp" artistName='stickxr' releseYear={2026} songs={[
      {title: "85", length: "1:28" },
      {title: "wait", length: "2:11" },
      {title: "głupia bae", length: "2:15" },
      {title: "payout", length: "2:42" },
      {title: "to nie ten stan", length: "1:45" },
      {title: "#bunnyfunny", length: "1:57" },
      {title: "to nie te myśli", length: "2:01" },
      {title: "fiji water angel神層", length: "2:14" },
      {title: "bettybop", length: "1:36" },
      {title: "go away", length: "1:59" },
      {title: "rip stickyboi85", length: "2:07" },
      {title: "rany", length: "1:25" },
      {title: "zamykam się", length: "2:08" },
      ]} /> 
      </div> 
  </StrictMode>,
)
