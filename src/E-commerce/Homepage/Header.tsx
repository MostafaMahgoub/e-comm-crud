import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FbIcon from './assets/icon fb.png';
import InstaIcon from './assets/icon insta.png';
import TwitterIcon from './assets/icon twitter.png';
import WhatsIcon from './assets/icon whatsapp.png';
import envelope from './assets/envelope.png';
import phoneAlt from './assets/phone-alt.png'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{ height: '4vh' , backgroundColor: '#9C5BF5' }}>
        <Toolbar sx={{ top: "-12px" ,margin: "0px 8vw"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex' , gap: "1vw" }}>
              <img src={FbIcon} alt="Facebook" />
              <img src={InstaIcon} alt="Instagram" />
              <img src={TwitterIcon} alt="Twitter" />
              <img src={WhatsIcon} alt="WhatsApp" />
            </Box>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: "1vw" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: "5px" }}>
            <img src={phoneAlt} alt="phone" />
            <Typography variant="body1">0000-123456789</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: "5px", marginLeft: "10px" }}>
            <img src={envelope} alt="envelope" />
            <Typography variant="body1">info@example.com</Typography>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;