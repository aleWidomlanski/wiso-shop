import NextLink from 'next/link'
import { Box, Card, CardContent, Divider, Grid, Link, Typography, Chip } from "@mui/material"
import { CartList, CartOrdenSumary } from "../../components/cart"
import { ShopLayout } from "../../components/layout"
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'


const OrderPage = () => (
    <ShopLayout title={"Resumen de orden 1213125453"} pageDescription={"Resumen de la orden"}>
        <Typography variant='h1' component='h1'>Orden: ABC123</Typography>
        {/* <Chip sx={{my:2}} label='Pendiente de pago' variant='outlined' color='error' icon={<CreditCardOffOutlined/>}/> */}
        <Chip sx={{my:2}} label='Orden Pagada' variant='outlined' color='success' icon={<CreditScoreOutlined/>}/>
        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList editable={false} />
            </Grid>

            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
           
                        <Divider sx={{ my: 1 }} />
                        <Box display={'flex'} justifyContent={'end'}>
                            <NextLink href={"/checkout/address"} passHref prefetch={false} legacyBehavior>
                                <Link underline='always'>
                                   Editar
                                </Link>
                            </NextLink>
                        </Box>
                        <Typography variant='subtitle1'>Dirección de entrega</Typography>
                        <Typography>Alejandro Widomlanski</Typography>
                        <Typography>Calle sin nombre 123</Typography>
                        <Typography>CABA, 1440</Typography>
                        <Typography>Argentina</Typography>
                        <Typography>+5411 11111111</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Box display={'flex'} justifyContent={'end'}>
                            <NextLink href={"/cart"} passHref prefetch={false} legacyBehavior>
                                <Link underline='always'>
                                   Editar
                                </Link>
                            </NextLink>
                        </Box>
                        <CartOrdenSumary />
                        <Box sx={{ mt: 3 }}>
                            <h1>Pagar</h1>
                            <Chip sx={{my:2}} label='Orden Pagada' variant='outlined' color='success' icon={<CreditScoreOutlined/>}/>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
)

export default OrderPage