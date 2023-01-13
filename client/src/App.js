
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePg from "./pages/HomePg";
import AddWordPg from './pages/AddWordPg';
import RandomReviewPg from './pages/RandomReviewPg';
import ResultPg from './pages/ResultPg';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePg/>} />
          <Route path="/addword" element={<AddWordPg/>} />
          <Route path="/review" element={<RandomReviewPg/>} />
          <Route path="/result" element={<ResultPg/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
