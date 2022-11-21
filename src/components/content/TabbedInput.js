import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import MuiTextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';

const TabbedInput = (props) => {
  // Get padding to determine height
  const ref = React.useRef(null);
  const [padding, setPadding] = React.useState(0);

  React.useEffect(() => {
    const parentStyles = getComputedStyle(ref.current.parentElement);
    const paddingTop = parseInt(parentStyles.paddingTop.slice(0, -2));
    const paddingBottom = parseInt(parentStyles.paddingBottom.slice(0, -2));
    setPadding(paddingTop + paddingBottom);
  });

  // Handle tabs selected state
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    'New Note',
    'Email',
    'Call',
    'Log Activity',
    'Create Task',
    'Schedule',
  ];

  return (
    <div ref={ref} style={{ height: props.height - padding, width: '100%' }}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((d) => (
          <MuiTab key={d} label={d} />
        ))}
      </MuiTabs>

      <MuiTextField
        sx={{
          marginTop: '20px',
          width: '100%',
          '& .MuiInputBase-root': {
            height: '100%',
          },
        }}
        multiline
        rows={5}
        label="Enter Activity Information"
      ></MuiTextField>

      {/* Submit Button */}
      <MuiBox
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          marginTop: '20px',
        }}
      >
        <MuiButton
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
        >
          Submit
        </MuiButton>
      </MuiBox>
    </div>
  );
};

TabbedInput.propTypes = {
  height: PropTypes.number.isRequired,
};

export default TabbedInput;
