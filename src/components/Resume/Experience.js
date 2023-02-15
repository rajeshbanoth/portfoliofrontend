import { Button, CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import FreelancerImage from '../../assets/images/freelancer.webp'
import Qryde from '../../assets/images/Qryde.jpg'
import Bel from '../../assets/images/bel.jpg'
import { AccountTreeRounded } from '@mui/icons-material'
import { AiOutlineCluster } from 'react-icons/ai'

export default function Experience(props) {


    const experienceData = [
        {
            companyName: "FreeLance",
            experience: "2022 April-present",
            profile: 'Full Stack Developer',
            text: 'Making Full-Stack MERN Web Applications For various  Clients  ',
            logo: { FreelancerImage },
            status: 'present'
        },
        {
            companyName: "Qryde",
            experience: "2020 Sept-2022 Mar",
            profile: 'Full Stack Developer',
            text: 'Worked As Full Stack Developer ,Hands on Various Project ',
            logo: { Qryde },
            status: 'past'


        },
        {
            companyName: "Bharat Electronics Limited",
            experience: "2018 Dec-2019-jan",
            profile: 'Trainee',
            text: 'Worked on Simulator For Mobile Receiver Jammer ',
            logo: { Bel },
            status: 'past'
        },

    ]


    return (
        <>
            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />

                <Paper style={{ borderRadius: '20px', padding: '30px', marginLeft: '20px', marginRight: '20px' }}>
                    <Grid sx={{ padding: '10px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <AiOutlineCluster size={40} color='orange' />
                            <span> <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Experience </Typography></span>
                        </div>



                        <Divider />


                        <div style={{ padding: '20px' }}>
                            {experienceData.map((item, i) => (
                                <>
                                    <div style={{ flexDirection: 'column', display: 'flex', paddingBottom: '10px', paddingTop: '10px' }}>


                                        {item.status === "present" ? (<Typography style={{ color: '#ffa500' }}>{item.experience}</Typography>) : (<Typography>{item.experience}</Typography>)}




                                        <div style={{ paddingBottom: '5px' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>{item.profile}</Typography>
                                            <Typography style={{ fontSize: '15px' }} >{item.companyName}</Typography>
                                        </div>

                                        <Typography>{item.text}</Typography>


                                    </div>

                                    <Divider />



                                </>
                            ))}
                        </div>

                    </Grid>


                    <Grid>


                    </Grid>
                </Paper>

            </ThemeProvider>

        </>
    )
}
