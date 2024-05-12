import "./App.css";

import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" role="main">
      <a href="#gallery" className="skip-to-main-content-link">
        Skip to main content
      </a>
      <NavBar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
