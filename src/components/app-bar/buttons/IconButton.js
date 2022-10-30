import React from 'react';
import PropTypes from 'prop-types';

import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from '@mui/material/IconButton';

import DynamicIcon from '../../DynamicIcon';
import IconButtonMenu from './IconButtonMenu';
import IconButtonLink from './IconButtonLink';

const IconButton = (props) => {
  // Pick button based on specified type
  let Button;
  switch (props.type) {
    case 'Menu':
      Button = IconButtonMenu;
      break;
    case 'Link':
      Button = IconButtonLink;
      break;
    default:
      Button = (
        <MuiTooltip title={props.tooltipText}>
          <MuiIconButton color="inherit">
            <DynamicIcon icon={props.icon}></DynamicIcon>
          </MuiIconButton>
        </MuiTooltip>
      );
      break;
  }

  return (
    <>
      <Button {...props}></Button>
    </>
  );
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
};

export default IconButton;
