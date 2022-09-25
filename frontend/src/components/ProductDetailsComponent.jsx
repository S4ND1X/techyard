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
    <div>
      <h1>{productName}</h1>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img src={productImg} alt="product" width="400px" height="400px" />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={4} readOnly />
        <p>{productDesc}</p>
        <div>
          <Button variant="contained" size="medium">
            Add to car
          </Button>
        </div>
      </Box>
    </div>
  );
}
