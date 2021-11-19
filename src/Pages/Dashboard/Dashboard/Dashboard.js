import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  useParams,
  useRouteMatch
} from "react-router-dom";
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import Footer from '../../Footer/Footer';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import ManageProduct from '../ManageProduct/ManageProduct';
import AllManageOrders from '../AllManageOrders/AllManageOrders';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const useStyle = makeStyles({
  
    mobileNavItem: {
       textDecoration: 'none',
       color: '#fff',
       
    }
  })

  const { mobileNavItem} = useStyle()

  const drawer = (
    <div style={{ backgroundColor: '#008CBA'}}>
      <Toolbar  />
      <Divider  />
      <List>
      <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to="/home">Home</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to={`${url}`}>My Order</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to={`${url}/review`}>Review</Link>
          </ListItemText>
          </ListItem>
          <Divider />
         {admin && <Box>
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to={`${url}/makeAdmin`}>Make Admin</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to={`${url}/allMangeOrders`}>Manage All Orders</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to={`${url}/addProducts`}>Add Product</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
          <ListItemText>
          <Link className={mobileNavItem} to={`${url}/manageProduct`}>Manage Products</Link>
          </ListItemText>
          </ListItem>
          <Divider />
          </Box>}
          <ListItem button >
          <ListItemText><Link className={mobileNavItem} to={`${url}/payment`}>Pay</Link></ListItemText>
          </ListItem>
          
         
          
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        
      >
        <Toolbar style={{ backgroundColor: '#008CBA'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        
        aria-label="mailbox folders"
        
        
        
      >
       
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
        </Drawer >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
          
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/addProducts`}>
          <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/manageProduct`}>
          <ManageProduct></ManageProduct>
        </Route>
        <Route path={`${path}/allMangeOrders`}>
          <AllManageOrders></AllManageOrders>
        </Route>

      </Switch>
        
        
      </Box>
    </Box>
    
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
