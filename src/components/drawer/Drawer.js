import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import MuiDivider from '@mui/material/Divider';
import MuiList from '@mui/material/List';

import NavListLink from './NavListLink';

const Drawer = (props) => {
  // Contents of both slide out and permanent drawer
  //   -could make two different drawer versions if required
  const DrawerContents = (
    <div>
      <MuiToolbar
        sx={{
          justifyContent: 'center',
          // TODO: Make these heights dynamic
          height: {
            xs: '128px',
            sm: '72px',
          },
        }}
      >
        <img
          src={props.logo.path}
          alt={props.logo.name}
          width="40"
          height="40"
        />
        <MuiTypography
          variant="h6"
          noWrap
          component="div"
          sx={{ paddingLeft: '10px', fontWeight: 'bold' }}
        >
          acme
        </MuiTypography>
        <MuiTypography variant="h6" noWrap component="div">
          {props.logo.name}
        </MuiTypography>
      </MuiToolbar>
      {props.linkGroups.map((linkGroup, linkGroupIndex) => (
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

  return (
    <MuiBox
      component="nav"
      sx={{ width: { sm: props.width }, flexShrink: { sm: 0 } }}
    >
      {/* Slide out drawer that shows at xs breakpoint */}
      <MuiDrawer
        variant="temporary"
        open={props.drawerOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: props.width,
          },
        }}
      >
        {DrawerContents}
      </MuiDrawer>
      {/* Permanent drawer that shows otherwise */}
      <MuiDrawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: props.width,
          },
        }}
        open
      >
        {DrawerContents}
      </MuiDrawer>
    </MuiBox>
  );
};

Drawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  logo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  linkGroups: PropTypes.arrayOf(
    PropTypes.shape({
      alignment: PropTypes.string.isRequired,
      links: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default Drawer;
