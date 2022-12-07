import React from 'react';
import PropTypes from 'prop-types';

import MuiCircularProgress from '@mui/material/CircularProgress';

const Embed = (props) => {
  return (
    <iframe
      src={props.src}
      title={props.title}
      width="100%"
      height="100%"
    ></iframe>
  );
};

Embed.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Embed;
