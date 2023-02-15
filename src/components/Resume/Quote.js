import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

export default function Quote(props) {
    

    return (
        <>
                <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />
                </ThemeProvider>
            
        </>
    )
}
