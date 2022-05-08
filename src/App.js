
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
  
    {/* < Header /> */}
    < NavBar/>
    
    { <ItemListContainer name="Bienvenidos a la tienda virtual" />   }
      {/* homeView */}

      {/* article */}

      {/* footer */}
    </div>
  );
}

export default App;
