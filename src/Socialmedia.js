import { Box, Container, createTheme, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import lottie from './assets/design tool.png';
import socialMDetails from "./component/socialMDetails";
import './root.css';

const Socialmedia= () =>{
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Quicksand',
                'sans-serif'
            ]
        }
    })
    const servises = (socialMDetail) => {
        return <Grid item key={socialMDetail.title} sx={{ marginBottom: 3, marginLeft: 5 }}>
            <Stack alignItems="flex-start" >
                <Stack direction="row" spacing={3}>
                    <Stack direction="column"sx={{
                            width: 73,
                            height: 73,
                            backgroundColor: socialMDetail.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '5px',
                            flexShrink: 0,
                            
                        }} >
                        {socialMDetail.icon}
                    </Stack>
                    <Stack direction="column" >
                        <Typography className="title" variant="h6">{socialMDetail.title}</Typography>
                        <Typography className="subtitle" sx={{color:"gray"}}>{socialMDetail.subtitle}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Grid>
    }
    
    return <ThemeProvider theme={theme}>
        <Box>
        <Container >
            <Grid container spacing={4} display='flex' justifyContent='center' alignItems='center'  sx={{marginTop: '100px'}}>
                <Grid item xs={12} md={6}>
                <Typography sx={{ fontSize:'45px', color: '#e83b4d', fontWeight:'bold', marginLeft:'150px'}}>What We Do?</Typography>
                   <Stack sx={{height:'450px', width:'450px', marginLeft:'50px'}}>
                   <img src={lottie} style={{marginTop:'40px', }} alt="lottie"/>
                    </Stack> 
                </Grid>
                <Grid xs={12} md={6} >
                    {socialMDetails.map(servises)}
                </Grid>
            </Grid>
        </Container>
    </Box>
    </ThemeProvider>
}
export default Socialmedia;