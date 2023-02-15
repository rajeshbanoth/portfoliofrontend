import { useEffect, useState } from 'react';
import DashBoard from './components/DashBoard';
import WelcomePage from './components/WelcomePage';
import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    //   mode: 'dark',
    background: {
      default: 'rgb(11, 15, 23)',
      paper: '#111827'
      // default:'#ffffff',
      // paper:'#ffffff'
    },
    primary: {
      main: "#b0afac"
    },
    secondary: {
      main: '#b0afac'
    },


    text: {
      primary: '#b0afac',
      secondary: "#000000",

      disabled: "rgba(255, 255, 255, 0.5)",
    },


    action: {
      active: '#f0f0f0',
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",

    },
    divider: "#f0f0f0",

  },
  typography: {
    fontFamily: [
      "Poppins", "sans-serif"
    ].join(','),

  }
});

function App() {
  const [DashboardState, setDashboardState] = useState(false)

  const handleDashboardState = (state) => {
    setDashboardState(state)
  }

  
  useEffect(() => {
    if (localStorage.getItem("visited") !== undefined) {
      const visited = localStorage.getItem("visited")
      setDashboardState(visited)
    }
  }, [])

  return (
    <div>
            <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {!DashboardState ? (<>   <WelcomePage handleDashboardState={handleDashboardState} /> </>) : (<><DashBoard /></>)}
</ThemeProvider>

     

    </div>
  );
}

export default App;
