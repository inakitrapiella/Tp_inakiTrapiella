
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./main.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Nosotros from "./components/Nosotros";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Contacto from "./components/Contacto";
import Checkout from "./components/Checkout";


function App() {

  
  return (
    <div>
   <CartProvider>
    <BrowserRouter>
   
    <Navbar/>

    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/productos" element={<ItemListContainer/>}/>
      <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
    
  
  );
}



export default App;
