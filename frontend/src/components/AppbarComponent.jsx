import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DropdownComponent from "./DropdownComponent";

export default function ButtonAppBar(props) {
  const [appbarTitle, setAppbarTitle] = React.useState("Home");
  function dropdownChangeHandler(value) {
    setAppbarTitle(value);
    props.dropdownChangeHandler(value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <DropdownComponent dropdownChangeHandler={dropdownChangeHandler} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {appbarTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
