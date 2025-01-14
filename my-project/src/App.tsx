import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Screen } from "./Modules";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Screen />
      </BrowserRouter>
    </div>
  );
}

export default App;
