import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';

const Text = (props) => {
  return (
    <>
      <MuiBox
        style={{
          fontWeight: '700',
          fontSize: '20px',
          ...props.headerStyle,
        }}
      >
        {props.header}
      </MuiBox>
      <MuiBox
        style={{ fontWeight: '500', fontSize: '16px', ...props.subheaderStyle }}
      >
        {props.subheader}
      </MuiBox>
      <MuiBox
        style={{
          fontWeight: '400',
          fontSize: '12px',
          ...props.textStyle,
        }}
      >
        {props.text}
      </MuiBox>
    </>
  );
};

Text.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  text: PropTypes.string,
  headerStyle: PropTypes.object,
  subheaderStyle: PropTypes.object,
  textStyle: PropTypes.object,
  opts: PropTypes.object,
  height: PropTypes.number,
  styles: PropTypes.object,
};

export default Text;
