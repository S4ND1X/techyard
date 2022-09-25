
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import dummy_grid_item from "../dummy_data/dummy_grid_item.json";

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
            <Typography variant='h6' gutterBottom>{data["name"]}</Typography>
            <Typography>💸{data["price"]}</Typography>
            <Typography>Rating: {data["rating"]}</Typography>
        </Paper>
    </Grid>;


export default function GridComponent() {
    return <div>
        <Grid container spacing={5} sx={{ width: "1200px", margin: "auto" }}>
            {multiplyObject(dummy_grid_item, 9).map(k =>
                <GridItemComponent data={k} />
            )}
        </Grid>
    </div>
}