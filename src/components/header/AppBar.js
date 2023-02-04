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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'left',
    padding: theme.spacing(1, 1, 1, 0),
    '> .nav-item:not(.MuiButton-contained):first-of-type': {
      paddingLeft: '0px',
    },
  }));

  // Wrapper for right aligned app bar items
  const RightWrapper = muiStyled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'right',
    padding: theme.spacing(1, 0, 1, 1),
    '> .nav-item:not(.MuiButton-contained):last-of-type': {
      paddingRight: '0px',
    },
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
            return (
              <div
                key={`${d.componentName}-${i}`}
                style={{ width: '100%' }}
                className="nav-item"
              >
                {Component ? (
                  <Component {...d}></Component>
                ) : (
                  `Unsupported component type: ${d.componentName}`
                )}
              </div>
            );
          })}
      </LeftWrapper>

      <RightWrapper>
        {/* Right Aligned Items */}
        {props.contents
          .filter((d) => d.alignment === 'right')
          .map((d, i) => {
            let Component = supportedComponents[d.componentName];
            return (
              <div key={`${d.componentName}-${i}`} className="nav-item">
                {Component ? (
                  <Component {...d}></Component>
                ) : (
                  `Unsupported component type: ${d.componentName}`
                )}
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
