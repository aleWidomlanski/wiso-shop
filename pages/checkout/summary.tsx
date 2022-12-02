import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, CartOrdenSumary } from "../../components/cart"
import { ShopLayout } from "../../components/layout"


const SumaryPage = () => (
    <ShopLayout title={"Resumen de orden"} pageDescription={"Resumen de la orden"}>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
        <Typography variant='h2'>Resumen (2 productos)</Typography>
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
                            <Button color='secondary' className='btn-circular' fullWidth>Confirmar Orden</Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
)

export default SumaryPage