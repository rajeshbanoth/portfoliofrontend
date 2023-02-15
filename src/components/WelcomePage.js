import React from 'react'
import WelcomePageBackground from '../assets/videos/WelcomePage.mp4'
import { Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

export default function WelcomePage(props) {

  const handleClick = () => {
    props.handleDashboardState(true)
    localStorage.setItem("visited", true)
  }

  return (
    <div >
      <video autoPlay='true' loop='true' muted
        style={{
          objectFit: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",


        }}>
        <source src={WelcomePageBackground} type="video/mp4" />
      </video>



      <div style={{
        width: "100%",
        margin: "0 auto",
        position: "relative",
        top: "250px",
        color: "#fff",

      }}>
        <div style={{ float: 'right' }}>

          <div style={{ width: '70%', float: 'right', alignContent: 'center', textAlign: 'center' }}>
            <Typography
              variant='h1'
              fontFamily={"serif"}
              style={{
                fontSize: '60px',
                color: '#263238',
                fontWeight: 'bold'
              }}
            >Hi,Thanks For Visiting My Portfolio </Typography>
            <Button variant='outlined' style={{
              textTransform: 'none',
              borderRadius: '20px',
              color: '#263238',

            }}
              endIcon={<ArrowForwardIcon />}
              onClick={handleClick}

            >Enter Into My World</Button>
          </div>


        </div>

      </div>

    </div>
  )
}
