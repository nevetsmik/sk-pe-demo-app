import React from 'react';
import PropTypes from 'prop-types';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiCssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiIconButton from '@mui/material/IconButton';
import MuiMenuIcon from '@mui/icons-material/Menu';
import MuiTypography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import MuiDivider from '@mui/material/Divider';
import MuiList from '@mui/material/List';

import { styled as muiStyled, alpha as muiAlpha } from '@mui/material/styles';
import MuiInputBase from '@mui/material/InputBase';
import MuiSearchIcon from '@mui/icons-material/Search';

import NavListLink from './drawer/NavListLink';
import { renderPageContent } from './content/RenderPageContent';

const drawerWidth = 265;

const ResponsiveDrawer = (props) => {
  // Drawer open state handler
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Collapsible drawer element
  const DrawerContents = (
    <div>
      <MuiToolbar sx={{ justifyContent: 'center' }}>
        <img src={props.drawer.logo.path} alt={props.drawer.logo.name} />
        <MuiTypography
          variant="h6"
          noWrap
          component="div"
          sx={{ paddingLeft: '10px', fontWeight: 'bold' }}
        >
          acme
        </MuiTypography>
        <MuiTypography variant="h6" noWrap component="div">
          {props.drawer.logo.name}
        </MuiTypography>
      </MuiToolbar>
      {props.drawer.linkGroups.map((linkGroup, linkGroupIndex) => (
        <div
          key={linkGroupIndex}
          style={
            linkGroup.alignment === 'bottom'
              ? { position: 'absolute', bottom: '0px', width: '100%' }
              : {}
          }
        >
          <MuiDivider />
          <MuiList>
            {linkGroup.links.map((link, linkIndex) => (
              <NavListLink {...link} key={linkIndex}></NavListLink>
            ))}
          </MuiList>
        </div>
      ))}
    </div>
  );

  // Search bar contents
  const Search = muiStyled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: muiAlpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: muiAlpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const StyledInputBase = muiStyled(MuiInputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  // Create router based on drawer links
  const router = createBrowserRouter(
    props.drawer.linkGroups.flatMap((d) => {
      return d.links.map((d) => ({
        path: d.route,
        element: (
          <MuiBox sx={{ display: 'flex' }}>
            <MuiCssBaseline />
            <MuiAppBar
              position="fixed"
              sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              <MuiToolbar>
                <MuiIconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MuiMenuIcon />
                </MuiIconButton>
                <Search>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <MuiIconButton color="inherit">
                    <MuiSearchIcon />
                  </MuiIconButton>
                </Search>
              </MuiToolbar>
            </MuiAppBar>
            <MuiBox
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              <MuiDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                  },
                }}
              >
                {DrawerContents}
              </MuiDrawer>
              <MuiDrawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                  },
                }}
                open
              >
                {DrawerContents}
              </MuiDrawer>
            </MuiBox>
            <MuiBox
              component="main"
              sx={{
                marginTop: '64px',
                width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              <MuiBox sx={{ padding: '16px' }}>
                {renderPageContent(d.contents)}
              </MuiBox>
            </MuiBox>
          </MuiBox>
        ),
      }));
    })
  );

  return <RouterProvider router={router} />;
};

ResponsiveDrawer.propTypes = {
  drawer: PropTypes.shape({
    logo: PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    linkGroups: PropTypes.arrayOf(
      PropTypes.shape({
        alignment: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.object.isRequired),
      })
    ),
  }),
};

export default ResponsiveDrawer;
