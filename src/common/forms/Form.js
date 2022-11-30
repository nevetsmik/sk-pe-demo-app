import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiFormControl from '@mui/material/FormControl';
import MuiButton from '@mui/material/Button';

import Select from './Select';
import TextField from './TextField';

const supportedComponents = {
  Select: Select,
  TextField: TextField,
};

const Form = (props) => {
  // Router navigation hook for rendering new page on submit
  const navigate = useNavigate();

  const handleCancel = (event) => {
    // Call optional cancel callback
    if (props.cancelCallback) {
      props.cancelCallback(event, navigate);
    }

    // Call optional modal close function
    if (props.modalClose) {
      props.modalClose();
    }
  };

  const handleSubmit = (event) => {
    // Call optional submit callback
    if (props.submitCallback) {
      props.submitCallback(event, navigate);
    }

    // Call optional modal close function
    if (props.modalClose) {
      props.modalClose();
    }
  };

  return (
    <>
      {/* Render form components from contents */}
      {props.contents.map((d, i) => {
        let Component = supportedComponents[d.componentName];

        return (
          <MuiFormControl
            key={`${d.componentName}-${d.label}-${i}`}
            fullWidth
            sx={{ marginTop: '15px' }}
          >
            <Component {...d}></Component>
          </MuiFormControl>
        );
      })}
      {/* Render Cancel and Submit Buttons */}
      <MuiBox
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <MuiButton
          className="form-button cancel-button"
          sx={{
            borderRadius: '5px',
            padding: '6px 40px',
            color: '#7E8299',
            backgroundColor: '#f5f8fa',
            '&:hover': { backgroundColor: '#E1E3E6' },
          }}
          variant="contained"
          onClick={handleCancel}
        >
          Cancel
        </MuiButton>
        <MuiButton
          className="form-button submit-button"
          sx={{
            borderRadius: '5px',
            padding: '6px 40px',
            marginLeft: '20px',
            backgroundColor: '#1DA259',
            '&:hover': {
              backgroundColor: '#1a9150',
            },
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </MuiButton>
      </MuiBox>
    </>
  );
};

Form.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      componentName: PropTypes.string.isRequired,
    })
  ).isRequired,
  cancelCallback: PropTypes.func,
  submitCallback: PropTypes.func,
  modalClose: PropTypes.func,
};

export default Form;
