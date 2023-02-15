import React from 'react'
import Work from './Works'
import About from './About';
import Resume from './Resume';
import { Grid } from '@mui/material';

export default function StateManage({state,darkTheme}) {
    

    return (
        <>
        <Grid container height={"100vh"} overflow={"auto"}>
            
        {state ==="about" && <About darkTheme={darkTheme} /> }
            {state==="resume" && <Resume darkTheme={darkTheme} /> }
            {state ==="work" && <Work darkTheme={darkTheme} /> }

        </Grid>
            

        </>
    )
}
