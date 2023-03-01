import React from 'react';
import PropTypes from 'prop-types';

import MuiTooltip from '@mui/material/Tooltip';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';

import DynamicIcon from '../DynamicIcon';
import Modal from '../modals/Modal';

const ButtonModal = (props) => {
  // Handle modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    // Call optional open start callback
    if (props.openStartCallback) {
      props.openStartCallback();
    }

    setOpen(true);

    // Call optional open end callback
    if (props.openEndCallback) {
      props.openEndCallback();
    }
  };
  const handleClose = () => {
    // Call optional open start callback
    if (props.closeStartCallback) {
      props.closeStartCallback();
    }

    setOpen(false);

    // Call optional open end callback
    if (props.closeEndCallback) {
      props.closeEndCallback();
    }
  };

  return props.displayIndicator ? (
    <>
      <Modal
        open={open}
        handleClose={handleClose}
        header={props.header}
        content={props.content}
      ></Modal>
      <MuiTooltip title={props.tooltipText}>
        {props.icon ? (
          <MuiIconButton
            sx={{
              ...props.styles,
            }}
            {...props.opts}
            id={props.id}
            className={props.classes}
            color="inherit"
            onClick={handleOpen}
          >
            <DynamicIcon icon={props.icon}></DynamicIcon>
          </MuiIconButton>
        ) : (
          <MuiButton
            sx={{
              borderRadius: '5px',
              padding: '6px 40px',
              ...props.styles,
            }}
            {...props.opts}
            id={props.id}
            className={props.classes}
            color="inherit"
            onClick={handleOpen}
          >
            {props.name}
          </MuiButton>
        )}
      </MuiTooltip>
    </>
  ) : (
    ''
  );
};

ButtonModal.propTypes = {
  displayIndicator: PropTypes.bool,
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string,
  tooltipText: PropTypes.string,
  openStartCallback: PropTypes.func,
  openEndCallback: PropTypes.func,
  closeStartCallback: PropTypes.func,
  closeEndCallback: PropTypes.func,
  header: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

export default ButtonModal;
