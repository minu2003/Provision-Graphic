import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Button, Card, CardContent, Container, createTheme, Grid, ImageListItem, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from 'react';
import details from './component/details';

const ChooseUs=() => {
    const theme =  createTheme({
        typography: {
            fontFamily:[
                'Quicksand',
                'sans-serif'
            ]
        }
    })
    const CreateCard = (detail) => {
        const [showMore, setShowMore] = useState(false);

        const handleToggle = () => {
            setShowMore(prevShowMore => !prevShowMore);
        };

        return (
            <Grid item xs={12} sm={6} md={4} key={detail.id}>
                <Card sx={{borderRadius:"20px", boxShadow:"0px 2px 18px rgba(211, 211, 211, 0.5)"}}>
                    <ImageListItem sx={{height:"230px", width:"230px", marginLeft:"50px"}}>
                        <img src={detail.imageURL} alt={detail.title} />
                    </ImageListItem>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{fontWeight:"bold", textAlign:"center"}}>
                            {detail.title}
                        </Typography>
                        <Button onClick={handleToggle} sx={{ color: showMore ? '#eaeded ' : '#e83b4d', textTransform: "capitalize", fontSize:"17px", fontWeight:"bold", marginTop:'20px'}}>
                           <ArrowRightIcon/> Read More... 
                        </Button>
                        {showMore && (
                            <Typography variant="body2" color="textSecondary" sx={{fontSize:"16px"}}>
                                {detail.hiddencontent}
                            </Typography>
                        )}
                        
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
            <Container justifyContent='center' alignItems='center' sx={{ marginTop: '100px' }}>
                <Typography sx={{ fontSize: '45px', color: '#e83b4d', fontWeight: 'bold', textAlign: 'center' }}>
                    Why Choose Us?
                </Typography>
                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
                    {details.map(CreateCard)}
                </Grid>
            </Container>
        </Box>
        </ThemeProvider>
    );
}

export default ChooseUs;