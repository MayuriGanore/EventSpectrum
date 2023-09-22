
import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Social from "./Components/Social";
import Cultural from "./Components/Cultural";
import Tech from "./Components/Tech";
import Business from "./Components/Business";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Cards />
      </div>
      <h3 style={{fontFamily:"cursive",fontStyle:'italic', color:'rgb(236, 28, 17)'}}>Find Events According to Desired Catagories</h3>
      <div>
        <Social />
      </div>
      <div>
        <Cultural/>
      </div>
      <div>
        <Tech/>
      </div>
      <div>
        <Business/>
      </div>
      
      <div style={{backgroundColor:'#7f1717'}}>
      <hr></hr>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
