import React from 'react';
import PropTypes from 'prop-types';

import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import { styled as muiStyled } from '@mui/material/styles';

import NavSearch from './NavSearch';
import Button from '../../common/buttons/Button';

let supportedComponents = {
  NavSearch: NavSearch,
  Button: Button,
};

const AppBar = (props) => {
  // Wrapper for left aligned items
  const LeftWrapper = muiStyled('div')(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%',
  }));

  // Wrapper for right aligned items
  const RightWrapper = muiStyled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'right',
    },
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%',
  }));

  return (
    <MuiToolbar
      sx={{
        // flexDirection: { xs: 'column', sm: 'row' },
        paddingLeft: { xs: '10px', sm: '20px', md: '40px' },
        paddingRight: { xs: '10px', sm: '20px', md: '40px' },
        ...props.styles,
      }}
      {...props.opts}
      id={props.id}
      className={props.classes}
    >
      <LeftWrapper>
        {/* Left Aligned Items */}
        {props.contents
          .filter((d) => d.alignment === 'left')
          .map((d, i) => {
            let Component = supportedComponents[d.componentName];
            return Component ? (
              <Component key={`${d.componentName}-${i}`} {...d}></Component>
            ) : (
              <div key={`${d.componentName}-${i}`}>
                Unsupported component type: {d.componentName}
              </div>
            );
          })}
      </LeftWrapper>

      {/* Spacer between Left Wrapper and Right Wrapper */}
      <MuiTypography
        component="div"
        sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
      ></MuiTypography>

      <RightWrapper>
        {/* Right Aligned Items */}
        {props.contents
          .filter((d) => d.alignment === 'right')
          .map((d, i) => {
            let Component = supportedComponents[d.componentName];
            return Component ? (
              <Component key={`${d.componentName}-${i}`} {...d}></Component>
            ) : (
              <div key={`${d.componentName}-${i}`}>
                Unsupported component type: {d.componentName}
              </div>
            );
          })}
      </RightWrapper>
    </MuiToolbar>
  );
};

AppBar.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  contents: PropTypes.array.isRequired,
};

export default AppBar;
