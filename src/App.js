import './App.css';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from "./components/NavBar/ItemListContainer";

function App() {
  return (
    <div className="App">
      <h2>C. Abril Turlione</h2>
      <h4>Estilos y home</h4>
      <NavBar/>
      <ItemListContainer text="texto por props" ></ItemListContainer>
    </div>
  );
}

export default App;
