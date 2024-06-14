import "./App.css";
import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";
import About from "./ContentBlocks/About/About";
import Home from "./ContentBlocks/Home/Home";

function App() {
  return (
    <>
      <Header />
        <Home/>
        <About/>
      <Footer />
    </>
  );
}

export default App;
