import Jogos from './screens/Jogos'
import { BrowserRouter, Routes, useLocation, Link, Route } from 'react-router-dom';
import './App.css';
import Generos from './screens/Generos'
import rdr2 from './assets/rdr2.jpg';
import hollow from './assets/hollow.jpg';
import god from './assets/god.jpg';
import last from './assets/last.jpg';
import clair from './assets/clair.jpg';
import logo from './assets/steam-logo-1.png'
import Distribuidora from './screens/Distribuidora';
import Desenvolvedora from './screens/Desenvolvedora';
import Avaliação from './screens/Avaliação';
import { useEffect, useState } from 'react';

function App() {
  const [menuAtual, setMenuAtual] = useState(0);

  useEffect(() => {
    console.log (menuAtual)
  },[menuAtual])
  return (
    <BrowserRouter>
      <div
        className="background-container"
        style={{ "--bg-image": `url(${menuAtual == 0? rdr2 : menuAtual == 1? hollow : menuAtual == 2? last : menuAtual == 3? clair : menuAtual == 4? god : null})` }}>
        <div className="content">
          <div className="header">
            <img src={logo} style={{ width: '20%' }} />

          </div>
          <div className="menu">
            <div className='button' onClick={()=>setMenuAtual(1)}>
              <Link to='/avaliacao'>
                <h1>Avaliações</h1>
              </Link>
            </div>
            <div className='button' onClick={()=>setMenuAtual(2)}>
              <Link to='/desenvolvedora'>
                <h1>Desenvolvedora</h1>
              </Link>
            </div>
            <div className='button' onClick={()=>setMenuAtual(3)}>
              <Link to='/Distribuidora'>
                <h1>Distribuidora</h1>
              </Link>
            </div>
            <div className='button' onClick={()=>setMenuAtual(4)}>
              <Link to='/generos'>
                <h1>Gênero</h1>
              </Link>
            </div>
            <div className='button' onClick={()=>setMenuAtual(0)}>
              <Link to='/'>
                <h1>Jogos</h1>
              </Link>
            </div>
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Jogos />} />
              <Route path='/generos' element={<Generos />} />
              <Route path='/distribuidora' element={<Distribuidora />} />
              <Route path='/desenvolvedora' element={<Desenvolvedora />} />
              <Route path='/avaliacao' element={<Avaliação />} />
              <Route path='*' element={<Jogos />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
