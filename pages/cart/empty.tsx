import NextLink from 'next/link'
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layout"


const emptyPage = () => {
    return (
        <ShopLayout title={"Carrito Vacío"} pageDescription={"No ha artículos en el carrito"}>
            <Box sx={{ flexDirection: { xs: 'column', sm: 'row' } }} display='flex' justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection={'column'} alignItems='center'>
                    <Typography marginLeft={2}>Su carrito está vacio.</Typography>
                    <NextLink href={'/'} passHref legacyBehavior>
                        <Link typography='h4' color='secondary'>
                            Regresar a Home
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default emptyPage