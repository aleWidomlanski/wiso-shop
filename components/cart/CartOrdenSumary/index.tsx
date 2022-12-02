import { Grid, Typography } from "@mui/material"

export const CartOrdenSumary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>
                    No.Productos
                </Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>
                    2
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>
                    Subtotal
                </Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>
                    {`$${155.36}`}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>
                    Impuestos
                </Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>
                    {`$${45.36}`}
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{mt:2}}>
                <Typography variant='subtitle1'>
                    Total a pagar
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{mt:2}} display='flex' justifyContent='end'>
                <Typography  variant='subtitle1'>
                    {`$${200.72}`}
                </Typography>
            </Grid>
        </Grid>
    )
}
