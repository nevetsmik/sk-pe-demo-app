import React from 'react';
import PropTypes from 'prop-types';

import MuiList from '@mui/material/List';
import Button from '../../common/buttons/Button';

const ButtonArray = (props) => {
  return (
    <MuiList>
      {props.contents.map((d) => (
        <Button key={d.name} {...d}></Button>
      ))}
    </MuiList>
  );
};

ButtonArray.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  options: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      styles: PropTypes.object,
      opts: PropTypes.object,
      id: PropTypes.string,
      classes: PropTypes.string,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      openStartCallback: PropTypes.func,
      closeEndCallback: PropTypes.func,
      header: PropTypes.object.isRequired,
      content: PropTypes.object,
    })
  ).isRequired,
};

export default ButtonArray;
