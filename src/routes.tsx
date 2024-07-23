import Banner from 'components/PaginaTemplate';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Banner />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
          <Route path='pratos/:id' element={<Prato />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}