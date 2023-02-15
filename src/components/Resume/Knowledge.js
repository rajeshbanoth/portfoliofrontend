import { CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { GrLanguage } from 'react-icons/gr'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

export default function Knowledge(props) {

    const data = [
        {
            value: "Responsive and mobile-ready",

        },
        {
            value: "GraphCMS Development"

        },
        {
            value: "Full-stack web app"
        },
        {
            value: " API Integration"
        },
        {
            value: "Authentication"
        },
        {
            value: "Database Integration"
        },
        {
            value: "W3C validated coding"
        },
        {
            value: "MERN or T3 stack"
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
                        <DiReact size={45} color='orange' />
                        <span> <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Knowledge</Typography></span>
                    </div>
                </div>


                <Grid container spacing={2} style={{ padding: '20px' }}>

{data.map((item,i)=>(
    <Grid item xs={12} sm={12} lg={12} md={12} >

<List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckIcon style={{color:'#FFA500'}} />
              </ListItemIcon>
              <ListItemText primary={item.value} />
            </ListItemButton>
          </ListItem>
          </List>
    </Grid>
))}
                    
                </Grid>


            </ThemeProvider>

        </>
    )
}
