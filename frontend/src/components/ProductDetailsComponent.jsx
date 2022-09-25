import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ProductDetailsComponent({
  productName,
  productDesc,
  productImg,
}) {
  return (
    <div style={{ display: "flex" }}>
      <img src={productImg} alt="product" width="800px" height="800px" />
      <div sx={{}}>
        <h1>{productName}</h1>

        <Typography component="legend">Used - Good state</Typography>
        <Rating name="read-only" value={4} readOnly />
        <p>{productDesc}</p>
        <div>
          💎 4000
          <Button variant="contained" size="small" sx={{marginLeft: "10px"}}>
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
