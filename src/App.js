import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {CartContextProvider} from './context/CartContext'
import Cart from './components/Cart';
import Error from './components/Error';

function App() {
  return (
    
    <BrowserRouter>
    <CartContextProvider>
    <div className="App">
        <Navbar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:categoryid' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='*' element={<Error/>}/>
              <Route path='search/:busqueda' element={<Cart/>}/>
            </Routes>
          <Footer/>
      </div>
      </CartContextProvider>
  </BrowserRouter>
  
  );
}

export default App;
