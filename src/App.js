import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Partida from './components/Partida';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/jogar" element={<Partida />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default App;
