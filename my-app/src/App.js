import './App.css';
import Second from './Second';
import Header from './component/Header';

function App() {
  const name = "Juri";
  const x = 5;
  const y = 2;
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <Header/>
      <Second/>
      <ul>
        <li><h5>x = {x}; y = {y}</h5></li>
        <li><h5>x + y = {x + y}</h5></li>
      </ul>
    </div>
  );
}

export default App;
