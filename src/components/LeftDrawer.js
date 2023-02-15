import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Fab, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Profilepic from '../assets/images/image.jpg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArticleIcon from '@mui/icons-material/Article';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function LeftDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const listValues = [

    {
      Icon: <PersonOutlineIcon />,
      label: 'About',
      value: 'about'

    },
    {
      Icon: <ArticleIcon />,
      label: 'resume',
      value: 'resume'

    },
    {
      Icon: <RemoveRedEyeIcon />,
      label: 'Works',
      value: 'work'

    }
  ]

  const handleComponent =(value)=>{
    props.state(value)
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


      <div  >

        <div style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex',paddingTop:'10px' }}>
          <Avatar
            alt="my Photo"
            src={Profilepic}
            sx={{ width: 100, height: 100 }}
          />

        </div>

        <div style={{ textAlign: 'center', justifyContent: 'space-between' }}>
          <Typography style={{ fontFamily: 'inherit', fontWeight: 'bold', fontSize: 30 }}> Rajesh Banoth</Typography>
          <Typography color='secondary' variant='b1' style={{ fontWeight: 200 }}> Full Stack Developer</Typography>

        </div>

        <div style={{ textAlign: 'center', justifyContent: 'space-between',paddingBottom:'10px' }}>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>

          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </div>



      </div>

      <Divider />



      <List>
        {listValues.map((Value, index) => (
          <ListItem key={Value} disablePadding>
            <ListItemButton onClick={()=>handleComponent(Value.value)}>
              <ListItemIcon>
                {Value.Icon}
              </ListItemIcon>
              <ListItemText primary={Value.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment >
          {/* <Button onClick={toggleDrawer('left', true)}>{'left'}</Button> */}

          <Grid sx={{
            display: {
              sm: "block",
              xs: 'block',
              md: 'none',
              lg: 'none'
            }
          }}>
            <Fab onClick={toggleDrawer('left', true)} sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
            }}>
              <AddIcon />
            </Fab>
          </Grid>

          <Grid sx={{
            display: {
              sm: "none",
              md: 'block',
              lg: 'block',
              xs:'none'
              
            }
          }}>
            <ListItemButton style={{ width: '100%' }} onClick={toggleDrawer('left', true)}>
              <ListItemIcon>
                <div style={{ textAlign: 'center', justifyContent: 'space-around', paddingLeft: '20px' }} >
                  <MenuIcon fontSize='large' />
                  <Typography style={{ fontSize: '12px' }} > Menu</Typography>
                </div>
              </ListItemIcon>

            </ListItemButton>
          </Grid>



          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}