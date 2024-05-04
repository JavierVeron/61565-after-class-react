
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <>
      <div>
        <NavBar/>
        <CartWidget/> 
        <ItemListContainer/> 
      </div>
      
    </>
  )
}

export default App
