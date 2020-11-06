// Contains product info to get charged
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import product from '../../utils/productDetails'

import styles from '../../Form.module.css'

const ProductInfo = () => {
    const { concept, good, id, amount, huso } = product

    return (
        <Grid container className="product-info">
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6" className={styles.font}>
                            Concepto de Pago
                        </Typography>
                        <Typography variant="subtitle2" className={styles.font}>
                            {concept}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={styles.font}>
                            Tipo de bien
                        </Typography>
                        <Typography variant="subtitle2" className={styles.font}>
                            {good}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={styles.font}>
                            ID del evento
                        </Typography>
                        <Typography variant="subtitle2" className={styles.font}>
                            {id}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={styles.font}>
                            Importe del servicio
                        </Typography>
                        <Typography variant="subtitle2" className={styles.font}>
                            {amount}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6" className={styles.font}>
                            Huso horario deseado
                        </Typography>
                        <Typography variant="subtitle2" className={styles.font}>
                            {huso}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductInfo
