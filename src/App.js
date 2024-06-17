import "./App.css";
import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";
import About from "./ContentBlocks/About/About";
import Home from "./ContentBlocks/Home/Home";
import MiniGame from "./ContentBlocks/MiniGame/MiniGame";
import Service from "./ContentBlocks/Services/Service";

function App() {
  return (
    <>
      <Header />
        <Home/>
        <About/>
        <Service/>
        <MiniGame/>
      <Footer />
    </>
  );
}

export default App;
