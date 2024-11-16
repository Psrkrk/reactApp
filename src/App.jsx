import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explore/Explore"; // Import Explore component
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      {/* Optionally render the Header component */}
      <Header />

      {/* Optionally render the Header component */}
      <Home />

      {/* Rendering the Explore component within this file */}
      <Explore />

      {/* Optionally render the Footer component */}
      <Footer />
    </>
  );
}

export default App;
