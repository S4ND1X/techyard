
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';


import dummy_grid_item from "../dummy_data/dummy_grid_item.json";
import FilterSidebarComponent from '../components/FilterSidebarComponent';

import Button from "@mui/material/Button";

import Chip from '@mui/material/Chip';

function multiplyObject(object_to_copy, n) {
    let rtn = [];
    for (let i = 0; i < n; i++) {
        rtn[i] = Object.assign({}, object_to_copy);
    }
    return rtn;
}


const GridItemComponent = ({ data }) =>
    <Grid xs={4}>
        <Paper sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            border: "none",
        }}
            variant="outlined"
        >
            <img src={data["img"]} alt="product" width="350px" height="350px" />
            <Typography variant='subtitle1' gutterBottom>{data["name"]}</Typography>


            <Typography>💎 {data["price"]}</Typography>
            <Typography>Rating: {data["rating"]}</Typography>
            <Chip label="Premium" />
        </Paper>
    </Grid>


export default function Home() {
    return <div>
        <div style={{ padding: "100px", textAlign: "center" }}>
            <Typography variant='h1'>Tech<span style={{ "color": "green" }}>Yard</span></Typography>
            <Typography variant="h4" gutterBottom>Where nothing becomes everything</Typography>
            <Stack direction="row" spacing={2} sx={{
                justifyContent: "center"
            }}>
                <Button variant='contained'>More Info</Button>
                <Button variant='contained' color="success">Get Started</Button>
            </Stack>
        </div>
        <FilterSidebarComponent />
        <Grid container spacing={5} sx={{ width: "1200px", margin: "auto" }}>

            {multiplyObject(dummy_grid_item, 9).map(k =>
                <GridItemComponent data={k} />
            )}
        </Grid>
    </div>
}