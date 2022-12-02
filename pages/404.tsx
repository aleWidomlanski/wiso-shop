import { Box, Typography } from '@mui/material'
import { ShopLayout } from '../components/layout'

const Custom404 = () => {
    return (
        <ShopLayout title={'Page not found'} pageDescription={'No hay nada que mostrar aquí'}>
            <Box sx={{flexDirection:{xs:'column', sm:'row'}}} display='flex' justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <Typography variant='h1' fontSize={80} fontWeight={200}  component={'h1'}>404|</Typography>
                <Typography margin={'left'}>No encontramos ninguna página</Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404