// Contains product info to get charged
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import product from '../../utils/productDetails'

const ProductInfo = () => {
    const { concept, good, id, amount, huso } = product

    return (
        <Grid container className="product-info">
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6">Concepto de Pago</Typography>
                        <Typography variant="subtitle2">{concept}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Tipo de bien</Typography>
                        <Typography variant="subtitle2">{good}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">ID del evento</Typography>
                        <Typography variant="subtitle2">{id}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            Importe del servicio
                        </Typography>
                        <Typography variant="subtitle2">{amount}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6">
                            Huso horario deseado
                        </Typography>
                        <Typography variant="subtitle2">{huso}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductInfo
