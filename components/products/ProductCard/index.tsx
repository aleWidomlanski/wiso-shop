import { FC, useMemo, useState } from "react";
import NextLink from 'next/link'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { IProduct } from '../../../interfaces/products';

interface Props {
  product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered ? `products/${product.images[1]}` : `products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card>
        <NextLink href={"/products/slug"} passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
              <CardMedia component={'img'} image={productImage} alt={product.title} className='fadein' />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className='fadein'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  )
}
