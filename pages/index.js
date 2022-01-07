import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import data from "../utils/data";
import NextLink from 'next/link';
const imagePathPrefix ='/demo';
export default function Home() {
  return (
    <Layout>
      <div>
        <h1> Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href = {`/product/${product.slug}`} passHref >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={imagePathPrefix+product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography>
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
