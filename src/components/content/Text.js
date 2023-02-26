import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';

const Text = (props) => {
  // Get padding to determine height
  const ref = React.useRef(null);
  const [padding, setPadding] = React.useState(0);

  React.useEffect(() => {
    const parentStyles = getComputedStyle(ref.current.parentElement);
    const paddingTop = parseInt(parentStyles.paddingTop.slice(0, -2));
    const paddingBottom = parseInt(parentStyles.paddingBottom.slice(0, -2));
    setPadding(paddingBottom + paddingTop);
  });
  // console.log('text height', props.height, padding, props.height - padding);

  return (
    <MuiBox
      ref={ref}
      style={{
        // height: props.height - padding,
        maxWidth: '100%',
        // whiteSpace: 'nowrap',
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        ...props.sx,
      }}
    >
      {props.header ? (
        <MuiBox
          style={{
            fontWeight: '700',
            fontSize: '20px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingBottom: '0px',
            ...props.headerStyle,
          }}
        >
          {props.header}
        </MuiBox>
      ) : (
        ''
      )}
      {props.subheader ? (
        <MuiBox
          style={{
            fontWeight: '500',
            fontSize: '16px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...props.subheaderStyle,
          }}
        >
          {props.subheader}
        </MuiBox>
      ) : (
        ''
      )}

      {props.text ? (
        <MuiBox
          style={{
            fontWeight: '400',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...props.textStyle,
          }}
        >
          {props.text}
        </MuiBox>
      ) : (
        ''
      )}
    </MuiBox>
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
  height: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default Text;
