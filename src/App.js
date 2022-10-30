import React from 'react';
import PropTypes from 'prop-types';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiCssBaseline from '@mui/material/CssBaseline';

import AppBar from './components/app-bar/AppBar';
import Drawer from './components/drawer/Drawer';
import PageContent from './components/content/PageContent';
import { renderPageContent } from './components/content/PageContent';

const App = (props) => {
  // Drawer open state handler
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Create router based on drawer links
  const router = createBrowserRouter(
    props.drawer.linkGroups.flatMap((d) => {
      return d.links.map((d) => ({
        path: d.route,
        element: (
          <MuiBox sx={{ display: 'flex' }}>
            <MuiCssBaseline />
            <AppBar
              drawerWidth={props.drawer.width}
              handleDrawerToggle={handleDrawerToggle}
              sx={props.styles.appBar}
            ></AppBar>
            <Drawer
              drawerOpen={drawerOpen}
              handleDrawerToggle={handleDrawerToggle}
              {...props.drawer}
            ></Drawer>
            <MuiBox
              component="main"
              sx={{
                // TODO: Make this padding dynamic
                marginTop: { xs: '128px', sm: '72px' },
                width: {
                  xs: '100%',
                  sm: `calc(100% - ${props.drawer.width}px)`,
                },
              }}
            >
              <MuiBox sx={props.styles.content}>
                {/* {renderPageContent(d.contents, props.styles.content.tiles)} */}
                <PageContent
                  content={d.contents}
                  styles={{ ContentTile: props.styles.content.tiles }}
                ></PageContent>
              </MuiBox>
            </MuiBox>
          </MuiBox>
        ),
      }));
    })
  );

  return <RouterProvider router={router} />;
};

App.propTypes = {
  styles: PropTypes.shape({
    appBar: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    drawer: PropTypes.object.isRequired,
  }),
  drawer: PropTypes.shape({
    width: PropTypes.number.isRequired,
    linkGroups: PropTypes.arrayOf(
      PropTypes.shape({
        links: PropTypes.arrayOf(
          PropTypes.shape({
            route: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default App;
