import './App.css';
import Topbar from './component/Topbar';
import Home from './component/Home';
import Anime from './component/Anime';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Topbar />
      <div className="App App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/anime" element={<Anime />} />
        </Routes>
      </div>


    </div>
  );
}



export default App;
