import NextLink from 'next/link'
import { Chip, Grid, Link, Typography } from "@mui/material"
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { ShopLayout } from "../../components/layout"

const HistoryPage = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
        {
            field: 'paid',
            headerName: 'Pagada',
            description: 'Muestra info si esta pagada la orden o no',
            width: 200,
            renderCell: (params: GridRenderCellParams) => {
                return (
                    params.row.paid
                        ?
                        <Chip color='success' label='Pagada' variant='outlined' />
                        : <Chip color='error' label='No Pagada' variant='outlined' />
                )
            }
        },
        {
            field: 'link',
            headerName: 'Link',
            description: 'Lleva al Link de la Orden',
            width: 200,
            sortable:false, 
            renderCell: (params: GridRenderCellParams) => {
                return (
                    <NextLink href={`/orders/${params.row.id}`} passHref prefetch={false} legacyBehavior>
                        <Link underline='always'>
                            Ver orden
                        </Link>
                    </NextLink>
                )
            }
        }
    ]

    const rows = [
        { id: 1, paid: true, fullName: 'Alejandro Mario' },
        { id: 2, paid: false, fullName: 'María Lourdes' },
        { id: 3, paid: false, fullName: 'Alda Paulina' },
        { id: 4, paid: false, fullName: 'Milka Zulma' },
        { id: 5, paid: false, fullName: 'Jaime' },
    ]

    return (
        <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes de clientes"}>
            <Typography variant='h1' component='h1'>Historial de Ordenes</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, witdh: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default HistoryPage
