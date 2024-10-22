import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LikesCounter from './components/LikesCounter';
import ProductLists from './components/ProductLists';

function App() {

  const shopName = "Varia";

  return (
    <div className="App">
      <Header />
      <ProductLists shopName = {shopName} />
      My div
      <LikesCounter/>
      <Footer/>
    </div>
  );
}

export default App;
