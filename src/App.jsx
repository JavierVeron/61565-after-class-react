import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Error404 from './Components/Error404/Error404';
import CartContextProvider from './Components/Context/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path={"/"} element={<ItemListContainer />} />
              <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
              <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route exact path={"/cart"} element={<Cart />} />
              <Route exact path={"/checkout"} element={<Checkout />} />
              <Route exact path={"*"} element={<Error404 />} />
            </Routes> 
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
