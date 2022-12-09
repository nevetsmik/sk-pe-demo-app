import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';
import MuiCircularProgress from '@mui/material/CircularProgress';

const Embed = (props) => {
  // Handle iframe loaded state
  const [iframeLoaded, setIframeLoaded] = React.useState(false);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  // Clear iframe loaded bool on src updated
  React.useEffect(() => {
    setIframeLoaded(false);
  }, [props.src]);

  return (
    <>
      <MuiBox
        sx={{
          display: iframeLoaded ? 'initial' : 'none',
        }}
      >
        <iframe
          src={props.src}
          title={props.title}
          onLoad={handleIframeLoad}
          width="100%"
          height="100%"
        ></iframe>
      </MuiBox>
      <MuiBox
        sx={{
          display: iframeLoaded ? 'none' : 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MuiCircularProgress
          size={200}
          sx={{
            color: 'rgb(225, 227, 230)',
          }}
        ></MuiCircularProgress>
      </MuiBox>
    </>
  );
};

Embed.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Embed;
