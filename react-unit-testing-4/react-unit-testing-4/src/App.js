import Dropdown from "./Components/Dropdown";
import { useState } from "react";
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="App">
      {selectedPokemon && selectedPokemon}
      <Dropdown
        title={"Select a Pokemon"}
        options={["Bulbasaur", "Squirtle", "Charmender","Mew"]}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
