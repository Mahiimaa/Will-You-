import Calc from "./pages/Calc.jsx";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Calc/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
