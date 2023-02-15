import React from 'react'
import { CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import lin from '../../assets/images/lin.webp'
import evanto from '../../assets/images/envato.webp'
import upwork from '../../assets/images/upwork.webp'
import freelancer from '../../assets/images/freelancer.webp'

export default function Clients(props) {


    return (
        <>
            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />


                <Paper style={{ borderRadius: '20px', padding: '30px', marginLeft: '20px', marginRight: '20px' }}>
                    <Grid sx={{ padding: '10px' }}>
                        <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Clients </Typography>
                        <Divider />


                        <Grid container spacing={2} padding={"20px"}>

                            <Grid item sm={12} md={3} lg={3} >
                            <a href='/'><img src={lin} width={"90%"} height={50} /></a>  

                            </Grid>


                            <Grid item sm={12} md={3} lg={3} >

                            <a href='/'><img src={freelancer} width={"90%"} height={50} /></a>  
                            </Grid>

                            <Grid item sm={12} md={3} lg={3} >
                            <a href='/'><img src={upwork} width={"90%"} height={50} /></a>  

                            </Grid>

                            <Grid item sm={12} md={3} lg={3} >
                          <a href='/'><img src={evanto} width={"90%"} height={50} /></a>  

                            </Grid>


                        </Grid>


                    </Grid>
                </Paper>

            </ThemeProvider>

        </>
    )
}
