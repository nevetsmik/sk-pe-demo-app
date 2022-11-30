import React from 'react';
import PropTypes from 'prop-types';

import MuiModal from '@mui/material/Modal';
import MuiBox from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import MuiCardHeader from '@mui/material/CardHeader';
import MuiDivider from '@mui/material/Divider';
import MuiCardContent from '@mui/material/CardContent';

import Form from '../forms/Form';

let supportedComponents = {
  Form: Form,
};

const Modal = (props) => {
  // Get content component based on componentName
  let Component = supportedComponents[props.content.componentName];

  return (
    <>
      <MuiModal
        sx={{
          '> .MuiBox-root': {
            width: '520px',
            maxWidth: 'calc(100% - 100px)',
          },
        }}
        open={props.open}
        onClose={props.handleClose}
        keepMounted
      >
        <MuiBox
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            ...props.styles,
          }}
          {...props.opts}
          id={props.id}
          className={props.classes}
        >
          <MuiCard>
            <MuiCardHeader
              sx={{
                fontSize: '1.25rem',
                fontWeight: 500,
                ...props.header.styles,
              }}
              {...props.header.opts}
              id={props.header.id}
              className={props.header.classes}
              title={props.header.name}
              disableTypography={true}
            ></MuiCardHeader>
            <MuiDivider></MuiDivider>
            <MuiCardContent
              sx={{
                padding: '16px 24px',
                ...props.content.styles,
              }}
              {...props.content.opts}
              id={props.content.id}
              className={props.content.classes}
            >
              <Component
                {...props.content}
                modalClose={props.handleClose}
              ></Component>
            </MuiCardContent>
          </MuiCard>
        </MuiBox>
      </MuiModal>
    </>
  );
};

Modal.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.shape({
    styles: PropTypes.object,
    opts: PropTypes.object,
    id: PropTypes.string,
    classes: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.shape({
    styles: PropTypes.object,
    opts: PropTypes.object,
    id: PropTypes.string,
    classes: PropTypes.string,
    componentName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
