import React from 'react';
import PropTypes from 'prop-types';

import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from '@mui/material/IconButton';
import MuiMenu from '@mui/material/Menu';

import DynamicIcon from '../../DynamicIcon';
import MenuItem from './menu-items/MenuItem';

const menuItems = [
  { name: 'Add New Account', type: 'Modal' },
  { name: 'Add New Contact', type: 'Modal' },
  { name: 'Add New Opportunity', type: 'Link' },
];

const IconButtonMenu = (props) => {
  // State management for open/close state of menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MuiTooltip title={props.tooltipText}>
        <MuiIconButton color="inherit" onClick={handleOpen}>
          <DynamicIcon icon={props.icon}></DynamicIcon>
        </MuiIconButton>
      </MuiTooltip>
      <MuiMenu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            handleClose={handleClose}
            {...item}
          ></MenuItem>
          // <MuiMenuItem key={item} onClick={handleClose}>
          //   <MuiTypography textAlign="center">{item}</MuiTypography>
          // </MuiMenuItem>
        ))}
      </MuiMenu>
    </>
  );
};

IconButtonMenu.propTypes = {
  icon: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
};

export default IconButtonMenu;
