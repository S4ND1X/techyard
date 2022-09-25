import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DropdownComponent from "./DropdownComponent";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const DUMMY_POINTS = "42069";

export default function ButtonAppBar(props) {
  function dropdownChangeHandler(value) {
    props.dropdownChangeHandler(value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <DropdownComponent dropdownChangeHandler={dropdownChangeHandler} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tech<b>Yard</b>
          </Typography>

          <Typography sx={{
            fontWeight: "bold",
            marginRight: "2px"
          }}>💎{DUMMY_POINTS}
          </Typography>
          <AddCircleIcon sx={{ marginRight: "30px" }} />
          <Button color="inherit">Account</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
