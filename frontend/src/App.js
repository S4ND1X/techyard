import Evaluation from "./views/Evaluation";
import ProductCard from "./components/ProductCard";
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";
import AppbarComponent from "./components/AppbarComponent";


const tabs = {
  "Evaluation": <Evaluation/>,
  "Product": <ProductCard/>,
  "Home": <Evaluation/>
};

function App() {  
  const [tab, setTab] = React.useState("Home");

  return (
    <div className="App">
      <AppbarComponent dropdownChangeHandler={(value) => setTab(value)}/>
      <CssBaseline />
      {tabs[tab]}
    </div>
  );
}

export default App;
