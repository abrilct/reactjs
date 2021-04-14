import './App.css';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Header} from "./components/Header";
import {CartProvider} from "./context/cartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <NavBar/>
          <Switch>
            <Route exact path='/'>
              Todos los productos
            </Route>
            <Route path='/listado'>
              <ItemListContainer />
            </Route>

            <Route path='/detalle'>
              <ItemDetailContainer />
            </Route>
            
          </Switch>
      </div>
    </BrowserRouter>
   </CartProvider>   
      
    
  );
}

export default App;
