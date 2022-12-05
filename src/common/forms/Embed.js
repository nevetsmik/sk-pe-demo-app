import React from 'react';
import PropTypes from 'prop-types';
import MuiBox from '@mui/material/Box';

const Embed = (props) => {
  return (
    <iframe
      src={props.iframeProps.src}
      title={props.iframeProps.title}
      width="100%"
      height="100%"
    ></iframe>
  );
};

Embed.propTypes = {
  iframeProps: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Embed;
