import Search from './components/search/Search';

import './App.css';
import Recipes from './components/recipes/Recipes';

function App() {
  return (
    <div className="App">
      <h2>Recipe App</h2>
      <Search />
      <Recipes />
    </div>
  );
}

export default App;
