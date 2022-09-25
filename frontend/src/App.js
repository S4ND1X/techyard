import Evaluation from "./views/Evaluation";
import ProductCard from "./components/ProductCard";
import CssBaseline from '@mui/material/CssBaseline';

import React from "react";
import AppbarComponent from "./components/AppbarComponent";
import Home from "./views/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';


import Product from "./views/Product";




const tabs = {
  "Evaluation": <Evaluation/>,
  "Product": <ProductCard/>,
  "Home": <Home/>
};


let theme = createTheme({
  palette: {
    primary: {
      main: '#004000',
    },
    secondary: {
      main: '#333',
    },
  },
});

function App() {  
  const [tab, setTab] = React.useState("Home");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <AppbarComponent dropdownChangeHandler={(value) => setTab(value)}/>
      <CssBaseline />
      {tabs[tab]}
      </ThemeProvider>

    </div>
  );
}

export default App;
