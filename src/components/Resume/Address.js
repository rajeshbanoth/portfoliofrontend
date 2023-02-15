import { CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Email, Home, LocationCityOutlined, Map, Phone } from '@mui/icons-material';

export default function Address(props) {


    return (
        <>
            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />
                <Paper style={{ margin: '20px', borderRadius: '20px', textAlign: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                    <TableContainer component={Paper} >
                        <Table sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none"
                            }
                        }}>

                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ minWidth: '100px' }} align="left" scope="row">

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <Email />
                                            <span><Typography>Email</Typography></span>
                                        </div>

                                    </TableCell>
                                    <TableCell align="left">banothrajesh97@gmail.com</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell style={{ minWidth: '100px' }} align="left" scope="row">
                                    <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <Phone />
                                            <span><Typography>Phone</Typography></span>
                                        </div>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography style={{ fontSize: '15px' }}>+918897540734</Typography>
                                        <Typography style={{ fontSize: '15px' }}>+916281687760</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell style={{ minWidth: '100px' }} align="left" scope="row">
                                    <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <Map />
                                            <span><Typography>Address</Typography></span>
                                        </div>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography style={{ fontSize: '15px' }}>Hyderabad</Typography>
                                        <Typography style={{ fontSize: '15px' }}>Telangana,India,506381</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>




                        </Table>
                    </TableContainer>


                    {/* <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>

                <div style={{justifyContent:'center',textAlign:'center',display:'flex',alignContent: 'center', }}>
                    <Typography>Email:</Typography>
                    <div style={{flexDirection:"column",display:'flex'}}>
                    <Typography>banothrajesh97@gmail.com</Typography>
                        </div>
                    

                 </div>

                 <div style={{justifyContent:'center',textAlign:'center',display:'flex',alignContent: 'center', }}>
                    <Typography>Phone :</Typography>
                    <div style={{flexDirection:"column",display:'flex'}}>
                    <Typography>+918897540734</Typography>
                    <Typography>+916281687760</Typography>
                    </div>
                   

                 </div>

                 <div style={{justifyContent:'center',textAlign:'center',display:'flex',alignContent: 'center', }}>
                    
                    <Typography>Address :</Typography>
                    <div style={{flexDirection:"column",display:'flex'}}>
                    <Typography>champla thanda</Typography>
                    <Typography>Dornakal</Typography>
                    <Typography>Mahabubabad</Typography>
                    <Typography>Telangana,506381</Typography>
                    </div>
                   

                 </div>

                </div>
                
 */}




                </Paper>
            </ThemeProvider>

        </>
    )
}
