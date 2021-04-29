import './App.css';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Header} from "./components/Header";
import {CartProvider} from "./context/cartContext";
import {Cart} from "./components/Cart/cart";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <NavBar/>         
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              
              <Route path="/category/:categoryId">
                <ItemListContainer />
              </Route>

              <Route path="/detalle/:itemId">
                <ItemDetailContainer />
              </Route>

              <Route path="/cart">
                <Cart/>
              </Route>
            
            </Switch>
          <Footer />  
        </div>
      </BrowserRouter>
    </CartProvider>   
      
    
  );
}

export default App;
