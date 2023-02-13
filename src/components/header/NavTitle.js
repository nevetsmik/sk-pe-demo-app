import React from 'react';
import PropTypes from 'prop-types';

import MuiTypography from '@mui/material/Typography';

const NavTitle = (props) => {
  return (
    <MuiTypography
      variant="h6"
      noWrap
      component="div"
      sx={{
        ...props.styles,
        paddingLeft: '10px',
        fontWeight: 'bold',
      }}
      {...props.opts}
      id={props.id}
      className={props.classes}
      tabIndex={0}
    >
      acme
      <MuiTypography
        variant="h6"
        noWrap
        component="span"
        sx={{ paddingRight: '20px' }}
      >
        {props.name}
      </MuiTypography>
    </MuiTypography>
  );
};

NavTitle.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default NavTitle;
