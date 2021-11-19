import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../hooks/useAuth';





const Navigation = () => {
  const {user, logout} = useAuth();
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none'
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display:'none !important'
      }
    },
    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:'none !important'
        
      }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
        textAlign:'right !important'
      }
    },
    mobileNavItem: {
       textDecoration: 'none',
       color: '#000',
       
    }
  })
  const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem} = useStyle()
  const [state, setState] = React.useState(false);


  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      
    >
      <List >
       
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to="/home">Home</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to="/products">Products</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText><Link className={mobileNavItem} to="/about us">About us</Link></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText><Link className={mobileNavItem} to="/login">Login</Link></ListItemText>
          </ListItem>
          <Divider />
      
      </List>
    
      
    </Box>
  );

    return (
        <>
        <Box sx={{ flexGrow: 1 , }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'#008CBA'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className= {navIcon}
            onClick={()=> setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 , textAlign:'left'}}>
            Bicycle Store
          </Typography>
         
          <Link className= {navItem} to="/home"><Button color="inherit">Home</Button></Link>
          <Link className= {navItem}  to="/products"><Button color="inherit">Products</Button></Link>
          
         {
            user?.email ? (
              <Box>
              <Link className= {navItem}  to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
            <Button onClick={logout} className= {navItem} color="inherit">Logout</Button>
          </Box>
            ):(<Link className= {navItem}  to="/login"><Button color="inherit">Login</Button></Link>)
         }
          
          
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
     <div>
     
       <React.Fragment >
        
         <Drawer
           
           open={state}
           onClose={()=> setState(false)}
         >
           {list}
         </Drawer>
       </React.Fragment>
     
   </div>
        </>
    );
};

export default Navigation;<h2>this is navigation</h2>