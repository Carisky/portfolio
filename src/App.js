import "./App.css";
import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";
import About from "./ContentBlocks/About/About";
import Home from "./ContentBlocks/Home/Home";
import MiniGame from "./ContentBlocks/MiniGame/MiniGame";
import Service from "./ContentBlocks/Services/Service";
import Resume from "./ContentBlocks/Resume/Resume";

function App() {
  return (
    <>
      <Header />
        <Home/>
        <About/>
        <Service/>
        <MiniGame/>
        <Resume/>
      <Footer />
    </>
  );
}

export default App;
