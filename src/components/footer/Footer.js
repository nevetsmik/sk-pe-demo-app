import React from 'react';
import PropTypes from 'prop-types';

import MuiAppBar from '@mui/material/AppBar';
import MuiTypography from '@mui/material/Typography';
import MuiFavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Footer = (props) => {
  return (
    <MuiAppBar
      ref={props.innerRef}
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#000000',
        boxShadow: 'none',
        paddingBottom: '5px',
        paddingTop: '10px',
        ...props.styles,
      }}
      {...props.opts}
      id={props.id}
      className={props.classes}
    >
      <MuiTypography
        component="div"
        sx={{
          display: 'flex',
          fontSize: '0.8rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Made with
        <MuiFavoriteBorderIcon
          sx={{
            color: '#0d88e6',
            fontSize: '1.2rem',
            padding: '0px 2px',
          }}
        ></MuiFavoriteBorderIcon>
        by Pendo Demo Engineering.
      </MuiTypography>
    </MuiAppBar>
  );
};

Footer.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  innerRef: PropTypes.object.isRequired,
};

export default Footer;
