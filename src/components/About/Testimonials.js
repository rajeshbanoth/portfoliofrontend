import { CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from "react-helmet";



// Import Swiper styles
import 'swiper/css';
import { swi } from 'swiper'

import StudentImage from '../../assets/images/studentimage.webp'


const TestimonialArray = [{
    text: "Incredibly fast and prompt communication and delivery. The order was delivered just an hour or so later, and the result was just as expected.",
    image: { StudentImage },
},

{
    text: "Incredibly fast and prompt communication and delivery. The order was delivered just an hour or so later, and the result was just as expected.",
    image: { StudentImage }
}
]



export default function Testimonials(props) {


    return (
        <>


            <ThemeProvider theme={props.darkTheme}>
 
                <CssBaseline />

                <Paper style={{ borderRadius: '20px', padding: '30px', marginLeft: '20px', marginRight: '20px' }}>
                    <Grid sx={{ padding: '10px' }}>
                        <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Testimonials </Typography>
                        <Divider />


                        <Grid container spacing={2} padding={"20px"}>


                            <div className="swiper">



                                <div className="swiper-pagination">
                                    <div className="swiper-slide">Slide 1</div>
                                    <div className="swiper-slide">Slide 2</div>
                                    <div className="swiper-slide">Slide 3</div>
                                </div>


                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>


                                <div className="swiper-scrollbar"></div>
                            </div>




                        </Grid>
                    </Grid>
                </Paper>


            </ThemeProvider>
        </>
    )
}
