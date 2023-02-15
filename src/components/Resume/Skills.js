import { CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { GiSkills } from 'react-icons/gi'
import Backend from './Backend'
import Frontend from './Frontend'
import Knowledge from './Knowledge'
import Language from './Languages'

export default function Skills(props) {


    return (
        <>
            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />

                <Paper style={{ borderRadius: '20px', padding: '30px', marginLeft: '20px', marginRight: '20px', paddingTop: '10px' }}>
                    <Grid sx={{ padding: '10px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <GiSkills size={40} color='orange' />
                            <span> <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Skills </Typography></span>
                        </div>

                        <Divider />



                    </Grid >


                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={6}>
<Backend darkTheme={props.darkTheme} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6}>
                        <Frontend darkTheme={props.darkTheme} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6}>
                        <Knowledge darkTheme={props.darkTheme} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={6}>
                        <Language darkTheme={props.darkTheme} />
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider>

        </>
    )
}
