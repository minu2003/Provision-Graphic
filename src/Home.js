import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { AppBar, Box, Button, Container, createTheme, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import image from './assets/Home-vector-5-1-scaled.jpg';
import navimage from './assets/Logo-long-for-white-background-2048x503.png';
import './root.css';

const Home = () => {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Quicksand',
                'sans-serif'
            ]
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                margin: 0,
                padding: 0
            }}
        >
            <div>
                <AppBar position="static" style={{ background: 'transparent', height: "90px", boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <Toolbar className='toolbar'>
                        <img src={navimage} alt='navimage' style={{ height: '50px', marginLeft: '110px', marginTop: '24px' }} />
                        <Stack direction='row' spacing={1} sx={{ marginLeft: '310px', marginTop: '20px' }}>
                            <Button className='nav-button' color='inherit'>home</Button>
                            <Button className='nav-button' color='inherit'>Portfolio</Button>
                            <Button className='nav-button' color='inherit'>Pricing</Button>
                            <Button className='nav-button' color='inherit'>About Us</Button>
                            <Button className='nav-button' color='inherit'>Contact Us</Button>
                            <Button className='nav-button' color='inherit'>Get a quote</Button>
                            <Button sx={{
                                textTransform: 'capitalize',
                                fontSize: '14px',
                                fontWeight: '400',
                                backgroundColor: ' #e83b4d',
                                width: '150px',
                                borderRadius: '100px',
                                height: '40px',
                            }} className='Button' color='inherit'>Login/Register<ArrowCircleRightOutlinedIcon sx={{fontSize:"22px", marginLeft:"10px"}}/></Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='home-content'>
                <Container>
                    <Typography className='header' variant="h5">
                        Let Us Take Your Brand
                    </Typography>
                    <Typography className='header' variant='h3'>
                        To The Next Level!
                    </Typography>
                    <Typography className='paragraph' sx={{ color: "white" }}>
                        A leading graphic design agency dedicated to helping businesses <br />
                        succeed through the power of visual design. We are here to bring. <br />
                        your vision to life through custom graphics that elevate your brand. <br />
                        Whether you need any marketing materials, we have a monthly <br />
                        package that fits your needs and budget.
                    </Typography>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            fontSize: '15px',
                            color: 'white',
                            backgroundColor: '#e83b4d',
                            marginTop: '27px',
                            borderRadius: '50px',
                            width: '130px',
                            height: '47px',
                            marginLeft: '10px'
                        }}
                        className='Button'
                        >
                        Packages
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            fontSize: '15px',
                            color: 'white',
                            marginTop: '27px',
                            borderRadius: '100px',
                            width: '120px',
                            height: '45px',
                            marginLeft: '10px',
                            borderColor: 'white'
                        }}
                        variant="outlined"
                        className='Button quote'>
                        Get a Quote
                    </Button>
                </Container>
            </div>
        </Box>
        </ThemeProvider>
    );
}

export default Home;
