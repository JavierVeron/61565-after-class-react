
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/"element={<ItemListContainer/>}/>
        </Routes> 
      </div>
    </>
    </BrowserRouter>
  )
}

export default App
