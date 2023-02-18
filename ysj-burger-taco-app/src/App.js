// import logo from './images/images.png';
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Homescreen from "./pages/Homescreen";

function App() {
    return (
        <div className="App">
        <Navbar/>
        <Homescreen/>
        </div>
    )
      
        
    }

export default App;