import { Button, CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import FreelancerImage from '../../assets/images/freelancer.webp'
import Qryde from '../../assets/images/Qryde.jpg'
import Bel from '../../assets/images/bel.jpg'
import { AccountTreeRounded } from '@mui/icons-material'
import {AiOutlineCluster} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'

export default function Education(props) {
    

const experienceData=[
    {
        companyName:"Delhi Technological Univerity",
        experience:"2016 - 2020",
        profile:'Graduate',
        text:'I have graduate  from DTU  in Software Engineering Brach with  66%  ',
        logo: {FreelancerImage},
        status:'present'
    },
    {
        companyName:"Narayana Junior College",
        experience:"2013 - 2015 ",
        profile:'Junior College',
        text:'I Have Completed my intermediate  in Narayana Junior College with  very good score i.e 93%',
        logo:{Qryde},
        status:'past'
        

    },
    {
        companyName:"Sri Chaitanaya  Concept School",
        experience:"2012 - 2013",
        profile:' High School',
        text:'I Have Completed my high school in Sri Chaitanaya  Concept School  with a very good score i.e 95% ' ,
        logo:{Bel},
        status:'past'
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
                                            <BsBook size={40} color='orange' />
                                            <span> <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Education </Typography></span>
                                        </div>
                             
                               
                              
                                <Divider />


                                <div style={{padding:'20px'}}>
                                   {experienceData.map((item,i)=>(
                                    <>
                                    <div style={{flexDirection:'column',display:'flex',paddingBottom:'10px',paddingTop:'10px'}}>

                              
                              {item.status==="present" ? ( <Typography  style={{color:'#ffa500'}}>{item.experience}</Typography>):( <Typography>{item.experience}</Typography>)}  
                                
                              


                                <div style={{paddingBottom:'5px'}}>
<Typography style={{fontWeight:'bold'}}>{item.profile}</Typography>
<Typography style={{fontSize:'15px'}} >{item.companyName}</Typography>
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
