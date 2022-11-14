import React from 'react';
import PropTypes from 'prop-types';

import MuiAppBar from '@mui/material/AppBar';
import MuiTypography from '@mui/material/Typography';

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
        textAlign: 'center',
        ...props.styles,
      }}
      {...props.opts}
      id={props.id}
      className={props.classes}
    >
      <MuiTypography> Made with love by Pendo Demo Engineering.</MuiTypography>
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
