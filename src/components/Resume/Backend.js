import { CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { GrLanguage } from 'react-icons/gr'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress style={{ height: '100px', width: '100px', color: '#FFA500' }} variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};



export default function Backend(props) {

    const data = [
        {
            name: 'NodeJs',
            value: 95,
        }, {
            name: "MySQL",
            value: 90
        },
        {
            name: "Mongo Db",
            value: 75
        },
        {
            name: "Oracle db",
            value: 90
        },
        {
            name: "Express",
            value: 95
        },
        {
            name: "Redis",
            value: 80
        }
    ]


    return (
        <>
            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />

                <div style={{ padding: "20px" }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <FaNodeJs size={40} color='orange' />
                        <span> <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Backend </Typography></span>
                    </div>


                    <Grid container spacing={2} style={{ padding: '20px' }}>

                        {data.map((item, i) => (
                            <Grid item sm={6} xs={6} md={6} lg={4} >
                                <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                    <CircularProgressWithLabel value={item.value} />
                                    <Typography > {item.name} </Typography>
                                </div>






                            </Grid>

                        ))}



                    </Grid>
                </div>


            </ThemeProvider>

        </>
    )
}
