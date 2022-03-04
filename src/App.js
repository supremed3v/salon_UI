import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import OfferPage from "./components/OfferPage/OfferPage";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <OfferPage />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
