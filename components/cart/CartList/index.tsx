import { FC } from 'react';
import NextLink from 'next/link'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { initialData } from '../../../database/products';
import { ItemCounter } from '../../products';


const productsInCart = [
  initialData.products[0],
  initialData.products[1]
]

interface Props {
  editable: boolean;
}

export const CartList:FC<Props> = ({editable}) => {
  return (
    <>
      {
        productsInCart.map((product) => {
          return (
            <Grid container spacing={2} key={product.slug} sx={{ mb: 2 }}>
              <Grid item xs={3}>
                <NextLink href={'/product/slug'} passHref legacyBehavior>
                  <Link display='flex' alignItems='center'  >
                    <CardActionArea>
                      <CardMedia image={`/products/${product.images[0]}`} component='img' sx={{ borderRadius: '5px' }} />
                    </CardActionArea>
                  </Link>
                </NextLink>
              </Grid>
              <Grid item xs={7}>
                <Box display='flex' flexDirection={'column'}>
                  <Typography variant='body1'>{product.title}</Typography>
                  <Typography variant='body1'>Talla:<strong>M</strong></Typography>
                  {editable ? <ItemCounter/> : 
                  <Typography>2 Items</Typography>}
                </Box>
              </Grid>
              <Grid item xs={2} display='flex' alignItems={'center'} flexDirection={'column'}>
                  <Typography variant='subtitle1'>${`${product.price}`}</Typography>
                  {editable && <Button variant='text' color='secondary'>Remover</Button>}
              </Grid>
            </Grid>
          )
        })
      }
    </>
  )
}
