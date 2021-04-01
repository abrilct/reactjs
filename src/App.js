import './App.css';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <h2>C. Abril Turlione</h2>
      <h4>Lista de Items</h4>
      <NavBar/>
      <ItemListContainer></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
