import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Body from "./layout/Body";
import Footer from "./layout/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
