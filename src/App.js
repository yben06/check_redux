import './App.css';
import AddItem from "./components/AddItem";
import ListItems from "./components/ListItems";

  const App=()=>  {

    return (
      <div className="App">
        <AddItem/>
        <ListItems/>
      </div>
    );
  };

export default App;