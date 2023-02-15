import { CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import {FaNodeJs} from 'react-icons/fa'
import {DiReact} from 'react-icons/di'
import {GrLanguage} from 'react-icons/gr'
import LinearProgress from '@mui/material/LinearProgress';

export default function Frontend(props) {
    
    const data=[
        {
            name:'React',
            value:95,
        },{
            name:"Nextjs",
            value:90
        },
        {
            name:"Html",
            value:95
        },
        {
            name:"angular",
            value:60
        },
        
    ]
    

    return (
        <>
                   <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />

         <div style={{padding:"20px"}}>
         <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <DiReact size={45} color='orange' />
                            <span> <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Frontend </Typography></span>
                        </div>

                        <Grid container spacing={2} style={{padding:'20px'}}>
                            {data.map((item,i)=>(
                                <Grid item xs={12} sm={12} lg={12} md={12} padding={2}>
                                    <Typography >{item.name}</Typography>
<LinearProgress   sx={{
                  backgroundColor: 'white',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#FFA500'
                  }
                }} variant="determinate" value={item.value} />
                                    
                                    </Grid>
                            ))}
                            
                            </Grid>
            </div>       
              

                </ThemeProvider>
            
        </>
    )
}
