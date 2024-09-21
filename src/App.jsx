import logo from './logo.svg';
import './App.css';
import Ask from "./Pages/Ask.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Ask/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
