import Evaluation from "./views/Evaluation";
import ProductCard from "./components/ProductCard";
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar } from "@mui/material";
import ResponsiveAppBar from "./components/Navbar";




function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <ResponsiveAppBar/>
      <Evaluation/>
    </div>
  );
}

export default App;
