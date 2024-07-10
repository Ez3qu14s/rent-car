import Header from './Components/Header';
import Carrinho from './pages/Carrinho';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
