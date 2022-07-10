import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:categoryid' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            </Routes>
          <Footer/>
      </div>
  </BrowserRouter>
  );
}

export default App;
