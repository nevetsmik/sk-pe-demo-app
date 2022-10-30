import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DynamicIcon from '../DynamicIcon';

const NavListLink = (props) => {
  return (
    <>
      <ListItem disablePadding button component={Link} to={props.route}>
        <ListItemButton>
          <ListItemIcon>
            <DynamicIcon icon={props.icon}></DynamicIcon>
          </ListItemIcon>
          <ListItemText primary={props.displayName} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

NavListLink.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired,
};

export default NavListLink;
