import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Slider from '@mui/material/Slider';

import Divider from "@mui/material/Divider";

const availableProducts = [
  "Computer",
  "Display",
  "Laptop",
  "Phone",
  "Speaker",
  "Tablet",
];

function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      {availableProducts.map(k => <FormControlLabel control={<Checkbox defaultChecked />} label={k} />)}
    </FormGroup>
  );
}


function ContinuousSlider() {
  /*const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/

  return (
    <Box>
      <Typography>💎Grade</Typography>
      <Slider defaultValue={30} aria-label="Disabled slider" />
      <Typography>💰Price</Typography>
      <Slider defaultValue={50} aria-label="Disabled slider" />
    </Box>
  );
}

export default function FilterSidebarComponent() {
  return (
    <Box
      sx={{
        position: "fixed",
        left: "0",
        top: "50%",
        transform: "translate(0, -50%)",
        display: 'flex',
        flexWrap: 'wrap',

      }}
    >
      <Paper elevation={5} sx={{
        height: "600px",
        width: "200px",
        padding: "30px"
      }}>
        <Typography variant="h6" marginBottom={5}>Filters</Typography>
        <ContinuousSlider />
        <CheckboxLabels />
      </Paper>
    </Box>
  );
}
