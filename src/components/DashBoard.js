import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


import { CssBaseline, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Article } from '@mui/icons-material';
import StateManage from './StateManage';
import Drawer from './LeftDrawer';
import LeftDrawer from './LeftDrawer';





export default function DashBoard({darkTheme}) {

  const [state, setstate] = useState("about")
  const [color, setColorState] = useState("#FFA500")
  const [ drawerState,setDrawerState] =useState(false)


  const handlestate = (statevalue) => {
    setstate(statevalue)

  }

  const handleDrawer =(e)=>{
    e.preventDefault()
    console.log("aara")
    setDrawerState(true)
  }


  return (
    <>


        <Grid container spacing={2}>
       
          <Grid md={1.7} lg={1.7} sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block'
            }, position: 'relative'
          }}>

            <Paper sx={{ height: '95vh', marginLeft: '40px', marginTop: '30px', marginRight: '40px', borderRadius: '20px' }}>



              <List style={{ paddingTop: '50px' }}>
              <ListItem disablePadding>
                 <LeftDrawer state={handlestate} />
                </ListItem>
                <div style={{ padding: '9px' }}>
                  <Divider />
                </div>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => handlestate("about")}>
                    <ListItemIcon>
                      <div style={{ textAlign: 'center', justifyContent: 'space-around', paddingLeft: '20px' }} >

                        {state === "about" ? (<>

                          <PersonOutlineIcon fontSize='large' sx={{ color: '#FFA500' }} />
                          <Typography style={{ fontSize: '12px', color: '#FFA500' }} > About </Typography>
                        </>) : (<>
                          <PersonOutlineIcon fontSize='large' />
                          <Typography style={{ fontSize: '12px' }} > About </Typography></>)}


                      </div>
                    </ListItemIcon>

                  </ListItemButton>
                </ListItem>
                <div style={{ padding: '9px' }}>
                  <Divider />
                </div>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => handlestate("resume")}>
                    <ListItemIcon>
                      <div style={{ textAlign: 'center', justifyContent: 'space-around', paddingLeft: '15px' }} >
                        {state === "resume" ? (<><ArticleIcon fontSize='large' sx={{ color: '#FFA500' }} />
                          <Typography style={{ fontSize: '12px', color: '#FFA500' }}  > Resume </Typography> </>) : (<><ArticleIcon fontSize='large'  />
                            <Typography style={{ fontSize: '12px' }} > Resume </Typography> </>)}

                      </div>
                    </ListItemIcon>

                  </ListItemButton>
                </ListItem>
                <div style={{ padding: '9px' }}>
                  <Divider />
                </div>


                <ListItem disablePadding>
                  <ListItemButton onClick={() => handlestate("work")}>
                    <ListItemIcon>
                      <div style={{ textAlign: 'center', justifyContent: 'space-around', paddingLeft: '20px' }} >
                        {state === "work" ? (<> <RemoveRedEyeIcon fontSize='large' sx={{ color: '#FFA500' }} />
                          <Typography style={{ fontSize: '12px', color: '#FFA500' }} > Works </Typography> </>) :
                           (<> <RemoveRedEyeIcon  fontSize='large' />
                            <Typography style={{ fontSize: '12px' }} > Works </Typography></>)}



                      </div>
                    </ListItemIcon>

                  </ListItemButton>
                </ListItem>
                <div style={{ padding: '9px' }}>
                  <Divider />
                </div>

              </List>

            </Paper>

          </Grid>

          <Grid md={10.3} lg={10.3} sm={12} xs={12}  >

            <Grid style={{ paddingTop: '10px' }}>
              <StateManage state={state} darkTheme={darkTheme} />
            </Grid>

<Grid  sx={{display:{
  sm:"block",
  md:'none',
  lg:'none',
  xs:'block'


}}}>
  <LeftDrawer state={handlestate} />
  </Grid>
          


          </Grid>

         

        </Grid>




    </>
  )
}
