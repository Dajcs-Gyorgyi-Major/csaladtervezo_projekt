import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Felmeres from "./Pages/Felmeres/Felmeres"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/felmeres" element={<Felmeres/>}/>
      <Route path="/" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
