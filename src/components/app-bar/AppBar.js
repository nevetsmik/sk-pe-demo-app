import React from 'react';
import PropTypes from 'prop-types';

import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiIconButton from '@mui/material/IconButton';
import MuiMenuIcon from '@mui/icons-material/Menu';
import MuiTypography from '@mui/material/Typography';
import { styled as muiStyled } from '@mui/material/styles';

import Search from './Search';
import ProfileAvatar from './ProfileAvatar';
import IconButton from './buttons/IconButton';

const AppBar = (props) => {
  // Wrapper for left aligned app bar items
  const LeftWrapper = muiStyled('div')(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%',
  }));

  // Wrapper for right aligned app bar items
  const RightWrapper = muiStyled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'right',
    },
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%',
  }));

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        ...props.sx,
      }}
    >
      <MuiToolbar sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <LeftWrapper>
          <MuiIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MuiMenuIcon />
          </MuiIconButton>
          <Search></Search>
        </LeftWrapper>
        <MuiTypography
          component="div"
          sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
        ></MuiTypography>
        <RightWrapper>
          <IconButton
            type="Link"
            icon="ContactSupport"
            tooltipText="Contact Support"
          ></IconButton>
          <IconButton
            type="Menu"
            icon="AddCircle"
            tooltipText="Add New"
          ></IconButton>
          <ProfileAvatar></ProfileAvatar>
        </RightWrapper>
      </MuiToolbar>
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  sx: PropTypes.object,
  drawerWidth: PropTypes.number.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default AppBar;
