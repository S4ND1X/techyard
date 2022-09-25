import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Chip from '@mui/material/Chip';


export default function ProductDetailsComponent({
  productName,
  productDesc,
  productImg,
}) {
  return (
    <div style={{ display: "flex" }}>
      <img src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png" alt="product" width="100%" height="800px" style={{ objectFit: "contain" }} />
      <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: "50px"
      }}>
        <h1 style={{ marginBottom: "0" }}>M1 Macbook Pro</h1>
        <Chip label="Premium" sx={{
          backgroundColor: "red",
          color: "white"
        }} />

        <Typography component="legend">Used - Good state</Typography>

        <Rating name="read-only" value={4} readOnly />

        <div style={{ width: "400px", }}>
          Apple M1 Pro chip<br />
          8-core CPU with 6 performance cores <br />
          14.2-inch (diagonal) Liquid Retina XDR display<br />
        </div>
        <div>
          💎 50,000
          <Button variant="contained" size="small" sx={{ marginLeft: "10px" }}>
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
