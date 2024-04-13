import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import ThingsToDo from './routes/ThingsToDo';
import Search from './routes/Search';
import PracticalTips from './routes/PracticalTips';
import PlacesToGo from './routes/PlacesToGo';
import PlacesToStay from './routes/PlacesToStay';
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div className="App">
      
      <LanguageProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/places-to-stay' element={<PlacesToStay/>}/>
        <Route path='/places-to-go' element={<PlacesToGo/>}/>
        <Route path='/things-to-do' element={<ThingsToDo/>}/>
        <Route path='/practical-tips' element={<PracticalTips/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
