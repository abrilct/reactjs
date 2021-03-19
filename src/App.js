import './App.css';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <h2>C. Abril Turlione</h2>
      <h4>Lista de Items</h4>
      <NavBar/>
      <ItemListContainer text="texto por props" ></ItemListContainer>
    </div>
  );
}

export default App;
