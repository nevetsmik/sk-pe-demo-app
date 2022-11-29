import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import MuiTextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';

import getDimensions from '../../common/getDimensions';

const TabbedInput = (props) => {
  // Resize handler for container
  const [containerRef, containerDim] = getDimensions();

  // Resize handler for tabs
  const [tabsRef, tabsDim] = getDimensions();

  // Resize handler for text area
  const [textAreaRef, textAreaDim] = getDimensions();

  // Resize handler for buttons
  const [buttonsRef, buttonsDim] = getDimensions();

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
    <div
      ref={containerRef}
      style={{
        height:
          props.height -
          props.card_content_vert_padding -
          containerDim.padding.vert,
        width: '100%',
      }}
    >
      {/* Scrolling tabs */}
      <MuiTabs
        sx={{
          display:
            props.height -
              props.card_content_vert_padding -
              containerDim.padding.vert <
            175
              ? 'none'
              : 'initial',
          height:
            props.height -
              props.card_content_vert_padding -
              containerDim.padding.vert <
            175
              ? 0
              : 'initial',
        }}
        ref={tabsRef}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((d) => (
          <MuiTab key={d} label={d} />
        ))}
      </MuiTabs>

      {/* Text area */}
      <MuiTextField
        ref={textAreaRef}
        sx={{
          marginTop: '8px',
          width: '100%',
          height: `${
            props.height -
            props.card_content_vert_padding -
            containerDim.padding.vert -
            tabsDim.outerHeight -
            textAreaDim.margin.vert -
            buttonsDim.outerHeight
          }px !important`,
          '& .MuiInputBase-root': {
            height: '100%',
          },
          '& .MuiInputBase-root .MuiInputBase-input': {
            height: `${
              props.height -
              props.card_content_vert_padding -
              containerDim.padding.vert -
              tabsDim.outerHeight -
              textAreaDim.margin.vert -
              buttonsDim.outerHeight -
              33 // Interior text area padding; TODO: Make dynamic
            }px !important`,
          },
        }}
        id="activity-tracker-text-area"
        multiline
        fullWidth
        minRows={1}
        maxRows={10}
        label="Enter Information"
      ></MuiTextField>

      {/* Submit Button */}
      <MuiBox
        ref={buttonsRef}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          marginTop: '20px',
        }}
      >
        <MuiButton
          className="tabbed-input-button submit-button"
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
  card_content_vert_padding: PropTypes.number.isRequired,
};

export default TabbedInput;
