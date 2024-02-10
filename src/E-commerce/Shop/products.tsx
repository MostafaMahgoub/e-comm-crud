import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";

type Product = {
  title: string;
  stars: number;
  price: string;
  image: string;
};

type ProductCategory = {
  products: Product[];
};

type ProductsData = {
  featuredProducts: ProductCategory;
  onSaleProducts: ProductCategory;
  topRatedProducts: ProductCategory;
};

function ProductCard({ title, stars, price, image }: Product) {
  console.log(title, stars, price, image);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "437px",
        height: "140px",
      }}
    >
      <Box sx={{ width: "140px", height: "140px" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box sx={{ ml: "20px" }}>
        <Typography
          variant="h4"
          sx={{ fontSize: "24px", fontWeight: "700" }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
          <Box sx={{ display: "flex", alignItems: "center", mr: "16px" }}>
            <span style={{ fontSize: "20px", color: "#FFCC00" }}>{stars}</span>
            <img
              src="/star.svg"
              alt="star"
              style={{ marginLeft: "8px" }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px", fontWeight: "700" }}
          >
            {price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function Products() {
  const { isLoading, isError, data } = useQuery<ProductsData>("products", async () => {
    const response = await fetch("/products.json");
    if (!response.ok) {
      throw new Error("Failed to load products");
    }
    const data = await response.json();
    return data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        margin: "10vw",
        gap: "13vw",
      }}
    >
      {data &&
        Object.entries(data).map(([category, { products }]) => (
          <Box sx={{ flexDirection: "column" }} key={category}>
            <Typography
              variant="h3"
              sx={{ fontSize: "32px", lineHeight: "36px", fontWeight: "700" }}
            >
              {category}
            </Typography>
            {products && products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </Box>
        ))}
    </Box>
  );
}

export default Products;