import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Vizsgalat from "./Pages/Vizsgalat/Vizsgalat"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/vizsgalat" element={<Vizsgalat/>}/>
      <Route path="/" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
