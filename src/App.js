import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer titulo = "Bienvenido a la pagina"/>
      <Footer/>
    </div>
  );
}

export default App;
