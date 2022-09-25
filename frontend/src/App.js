import Evaluation from "./views/Evaluation";
import ProductCard from "./components/ProductCard";
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SimplePaper from "./components/Paper"


function App() {
  return (

    <div className="App">
      <SimplePaper/>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Evaluation />} />
          <Route path="/product" element={<ProductCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
