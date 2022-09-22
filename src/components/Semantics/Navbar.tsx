import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
export const navItems = [{ item: 'Home', link: "/" },
{ item: 'Projects', link: "#projects" },
{ item: 'About', link: "#about" }, { item: 'Contact', link: "#contact" }];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const hover = {
    "&:hover":
    {
      backgroundColor: "grey"
    }
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: "black", color: "white", height: "100vh", fontSize:'1.4rem' }}>
      <Typography component={"a"} variant="h6" href="/" sx={{ my: 2 }}>
        <img src={process.env.PUBLIC_URL + '/mylogo.png'} width="30px" height={'30px'} alt='Kenny Dev.' />
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ item, link }) => (
          <ListItem key={item} disablePadding sx={{ ...hover }}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <a href="#contact"><ListItemText primary={item} /></a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: "black", fontSize:'1.4rem'}}>
      <AppBar component="nav" sx={{ boxShadow: "0" }}>
        <Toolbar sx={{ bgcolor: "white", color: 'black', borderBottom: "1px lightgrey solid" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, boxShadow: "0" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={"a"} variant="h6" href="/"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, ml: { xs: "auto", md: "70px" } }}>
            <img src={process.env.PUBLIC_URL + '/mylogo.png'} width="30px" height={'30px'} alt='Kenny Dev.' />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: { xs: "auto", md: "7rem" } }}>
            {navItems.map(({ item, link }) => (
              <Button key={item} sx={{ color: '#000', mx: '30px',fontSize:'1.4rem'}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{}}>
        <Toolbar />
      </Box>
    </Box>
  );
}
