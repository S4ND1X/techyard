import Evaluation from "./views/Evaluation";
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Evaluation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
