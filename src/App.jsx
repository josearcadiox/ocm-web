import "./App.css";
import Companies from "./components/Companies/Companies";
import Contactos from "./components/Contactos/Contactos";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Proyectos from "./components/Proyectos/Proyectos";
import Value from "./components/Value/Value";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <div className="white-gradient"/> 
          <Hero />
        </div>
        <Companies />
        <Proyectos />
        <Value />
        <Contactos />
        <Footer />
      </div>
    </>
  );
}

export default App;
