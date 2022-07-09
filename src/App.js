import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
