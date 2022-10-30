import React from 'react';
import PropTypes from 'prop-types';

import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from '@mui/material/IconButton';

import DynamicIcon from '../../DynamicIcon';

const IconButtonLink = (props) => {
  return (
    <>
      <MuiTooltip title={props.tooltipText}>
        <MuiIconButton
          color="inherit"
          href={'https://www.google.com'}
          target="_blank"
        >
          <DynamicIcon icon={props.icon}></DynamicIcon>
        </MuiIconButton>
      </MuiTooltip>
    </>
  );
};

IconButtonLink.propTypes = {
  icon: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
};

export default IconButtonLink;
