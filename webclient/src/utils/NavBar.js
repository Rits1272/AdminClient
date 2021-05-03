import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useHistory } from 'react-router-dom';
import firebase from '../Firebase';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // siedbar open by default
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = (type) => {
    const path = '/' + type;
    history.push(path);
    return;
  }

  const logoutUser = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    history.push("/login");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
             Gatisheel
           </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>       
             <ListItem button key={"Daily Report"} >
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText onClick={() => navigate('home')} primary={"Daily Report"} />
            </ListItem>

            <ListItem button key={"Add New Roles"} >
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText onClick={() => navigate('register')} primary={"Add New Roles"} />
            </ListItem>

            <ListItem button key={"Add Drawings"} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText onClick={() => navigate('AddDrawing')} primary={"Add Drawings"} />
            </ListItem>

            <ListItem button key={"Monthly Report"} >
              <ListItemIcon><AssignmentTurnedInIcon /></ListItemIcon>
              <ListItemText onClick={() => navigate('report')} primary={"Monthly Report"} />
            </ListItem>

            <ListItem button key={"Inventory"} >
              <ListItemIcon><StoreMallDirectoryIcon /></ListItemIcon>
              <ListItemText onClick={() => navigate('inventory')} primary={"Inventory"} />
            </ListItem>

            <ListItem button key={"Employees"} >
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText onClick={() => navigate('employees')} primary={"Employees"} />
            </ListItem>

            <ListItem button key={"Logout"} >
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText onClick={logoutUser} primary={"Logout"} />
            </ListItem>
           
        </List>
      </Drawer>
    </div>
  );
}