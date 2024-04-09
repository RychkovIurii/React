import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import ThingsToDo from './routes/ThingsToDo';
import Search from './routes/Search';
import PracticalTips from './routes/PracticalTips';
import PlacesToGo from './routes/PlacesToGo';
import PlacesToStay from './routes/PlacesToStay';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/places-to-stay' element={<PlacesToStay/>}/>
        <Route path='/places-to-go' element={<PlacesToGo/>}/>
        <Route path='/things-to-do' element={<ThingsToDo/>}/>
        <Route path='/practical-tips' element={<PracticalTips/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>

    </div>
  );
}

export default App;
