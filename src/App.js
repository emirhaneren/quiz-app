import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/quiz/quiz';
import Introduce from './pages/introduce/introduce';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
        </Routes>
    </Router>
  );
}

export default App;
