import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MontesClaros from './pages/MontesClaros';
import Taiobeiras from './pages/Taiobeiras';
import Hub from './pages/Hub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MontesClaros />} />
        <Route path="/taiobeiras" element={<Taiobeiras />} />
        <Route path="/cursos" element={<Hub />} />
      </Routes>
    </Router>
  );
}

export default App;
