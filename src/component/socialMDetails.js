import CellTowerIcon from '@mui/icons-material/CellTower';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WebIcon from '@mui/icons-material/Web';

const socialMDetails = [
    {
        id: 1,
        icon: <VisibilityOutlinedIcon sx={{fontSize:'30px', color:'white'}}/>,
        title: "Branding and Identity",
        subtitle: "Logo Design, Brand Guidelines, Stationery Design.",
        color : '#5c69ee'
    },
    {
        id: 2,
        icon: <CellTowerIcon sx={{fontSize:'36px', color:'white'}}/>,
        title: "Marketing Materials",
        subtitle: "Flyers, Banners, Brochures, Yard Signs, Car Magnets, Door hangers, Business cards and more!",
        color : '#b97feb',
    },
    {
        id: 3,
        icon: <FacebookRoundedIcon sx={{fontSize:'30px', color:'white'}}/>,
        title: "Social Media designs",
        subtitle: "Social Media Contents, Ads, Thumbnails, banners and more!",
        color: '#76c841'
    },
    {
        id: 4,
        icon: <LensBlurIcon sx={{fontSize:'40px', color:'white'}}/>,
        title: "Ai Generations",
        subtitle: "Midjourney Image Generations, Content Generation,",
        color: '#e62388'
    },
    {
        id: 5,
        icon: <WebIcon sx={{fontSize:'30px', color:'white'}}/>,
        title: "Web Design & Development",
        subtitle: "Web Design & Redesign, UI/UX Design, Web Development",
        color: '#fbbf1f'
    }
]
export default socialMDetails;