import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        primary
        size="small"
        label={"Coca Cola Primario"}
        onClick={() => console.log("a")}
      ></Button>
    </div>
  );
}

export default App;
