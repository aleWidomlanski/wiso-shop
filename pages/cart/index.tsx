import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { CartList, CartOrdenSumary } from "../../components/cart"
import { ShopLayout } from "../../components/layout"


const CartPage = () => (
    <ShopLayout title={"Carrito-2"} pageDescription={"Carrito de compras de la tienda"}>
        <Typography variant='h1' component='h1'>Carrito</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList editable/>
            </Grid>

            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Orden</Typography>
                        <Divider sx={{ my: 1 }} />
                        <CartOrdenSumary/>
                        <Box sx={{ mt: 3 }}>
                            <Button color='secondary' className='btn-circular' fullWidth>Checkout</Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
)

export default CartPage