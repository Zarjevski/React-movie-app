import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Collection from "./pages/Collection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movie" element={<Movie />} />
        <Route path="/collection/:category" element={<Collection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
