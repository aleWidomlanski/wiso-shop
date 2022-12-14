import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layout"

const AddressPage = () => {
  return (
    <ShopLayout title={"Checkout"} pageDescription={"Confirmar dirección destino"}>
        <Typography variant='h1' component='h1'>Dirección</Typography>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Apellido' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccion' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccion2 (opcional)' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Código Postal' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Ciudad' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <Select variant='filled' label='País' value={1}>
                    <MenuItem value={1}>Argentina</MenuItem>
                        <MenuItem value={2}>Uruguay</MenuItem>
                        <MenuItem value={3}>Brasil</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Télefono' variant='filled' fullWidth/>
            </Grid>
        </Grid>
        <Box sx={{mt:5}} display='flex' justifyContent='center'>
            <Button color='secondary' className='circular-btn' size='large'>
                Realizar Pedido
            </Button>
        </Box>
    </ShopLayout>
  )
}

export default AddressPage