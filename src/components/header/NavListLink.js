import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DynamicIcon from '../../common/DynamicIcon';

const NavListLink = (props) => {
  return (
    <>
      <ListItem disablePadding button component={Link} to={props.route}>
        <ListItemButton sx={{ padding: '5px 40px' }}>
          {props.icon ? (
            <ListItemIcon>
              <DynamicIcon icon={props.icon}></DynamicIcon>
            </ListItemIcon>
          ) : (
            ''
          )}
          <ListItemText primary={props.name} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

NavListLink.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavListLink;
