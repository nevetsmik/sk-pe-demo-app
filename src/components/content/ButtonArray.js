import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';
import Button from '../../common/buttons/Button';

const ButtonArray = (props) => {
  console.log('Buttons!');

  return (
    <MuiBox>
      {/* {props.options.map((d, i) => ( */}
      <Button
        styles={{ ...props.styles }}
        id=""
        classes=""
        type="Modal"
      ></Button>
      {/* ))} */}
    </MuiBox>
  );
};

ButtonArray.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  options: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
};

export default ButtonArray;

// example input to button:
// {
//   styles: {},
//   opts: {},
//   id: 'help-button',
//   classes: '',
//   componentName: 'Button',
//   alignment: 'right',
//   type: 'Link',
//   icon: 'ContactSupport',
//   tooltipText: 'Go to Help Center',
//   href: 'https://support.pendo.io/hc/en-us',
//   target: '_blank',
// },

//   styles: PropTypes.object,
//   opts: PropTypes.object,
//   id: PropTypes.string,
//   classes: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   icon: PropTypes.string,
//   name: PropTypes.string,
//   tooltipText: PropTypes.string,
