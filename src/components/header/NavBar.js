import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MuiToolbar from '@mui/material/Toolbar';
import MuiIconButton from '@mui/material/IconButton';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiMenuIcon from '@mui/icons-material/Menu';
import MuiTypography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import MuiList from '@mui/material/List';
import { styled as muiStyled } from '@mui/material/styles';

import NavTitle from './NavTitle';
import Button from '../../common/buttons/Button';
import NavAvatar from './NavAvatar';
import NavListLink from './NavListLink';

let supportedComponents = {
  NavTitle: NavTitle,
  NavAvatar: NavAvatar,
  Button: Button,
};

const NavBar = (props) => {
  // Current location in router used to select navigation button
  const location = useLocation();

  // Handle resize of left/right wrappers to determine when to display drawer
  const leftWrapperRef = React.useRef(null);
  const [leftWrapperWidth, setLeftWrapperWidth] = React.useState(0);

  const handleLeftWrapperResized = () => {
    // Only update left wrapper width while drawer is closed so that you can re-open when expanding past the required width
    if (
      leftWrapperRef.current.offsetWidth !== leftWrapperWidth &&
      !drawerMenuIconDisplayed
    ) {
      setLeftWrapperWidth(leftWrapperRef.current.offsetWidth);
    }
  };

  const leftWrapperObserver = new ResizeObserver(handleLeftWrapperResized);

  React.useEffect(() => {
    leftWrapperObserver.observe(leftWrapperRef.current);

    return function cleanup() {
      leftWrapperObserver.disconnect();
    };
  });

  const rightWrapperRef = React.useRef(null);
  const toolbarRef = React.useRef(null);

  const getToolbarOffset = (toolbarEl) => {
    if (toolbarEl) {
      const computedStyle = window.getComputedStyle(toolbarEl);
      return (
        parseInt(computedStyle.paddingLeft, 10) +
        parseInt(computedStyle.paddingRight, 10) +
        parseInt(computedStyle.marginLeft, 10) +
        parseInt(computedStyle.marginRight, 10)
      );
    } else {
      return 0;
    }
  };

  // Handle window resize
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
      if (
        leftWrapperWidth +
          rightWrapperRef.current.clientWidth +
          getToolbarOffset(toolbarRef.current) >=
        window.innerWidth
      ) {
        setDrawerMenuIconDisplayed(true);
      } else {
        setDrawerMenuIconDisplayed(false);
      }
    }

    window.addEventListener('resize', handleWindowResize);
  });

  // Handle state for nav drawer
  const [drawerMenuIconDisplayed, setDrawerMenuIconDisplayed] =
    React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Wrapper for left aligned app bar items
  const LeftWrapper = muiStyled('div')(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(1, 1, 1, 1),
  }));

  // Wrapper for right aligned app bar items
  const RightWrapper = muiStyled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'right',
    },
    padding: theme.spacing(1, 1, 1, 1),
  }));

  // Styled menu items
  const StyledMenuItem = muiStyled(MuiMenuItem)(({ theme }) => ({
    borderRadius: '5px',
    '&.Mui-selected': {
      backgroundColor: 'rgba(25, 118, 210, 0.38)',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
    },
  }));

  // Render contents of bar based on alignment
  const renderContentsWithAlignment = (alignment) => {
    return props.contents
      .filter((d) => d.alignment === alignment)
      .map((d, i) => {
        let Component = supportedComponents[d.componentName];
        return Component ? (
          <Component
            key={`${d.componentName}-${i}`}
            {...d}
            pendoMetadata={props.pendoMetadata}
          ></Component>
        ) : (
          <div key={`${d.componentName}-${i}`}>
            Unsupported component type: {d.componentName}
          </div>
        );
      });
  };

  return (
    <>
      <MuiToolbar
        sx={{
          // flexDirection: { xs: 'column', sm: 'row' },
          paddingLeft: { xs: '10px', sm: '20px', md: '40px' },
          paddingRight: { xs: '10px', sm: '20px', md: '40px' },
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          justifyContent: 'space-between',
          ...props.styles,
        }}
        {...props.opts}
        id={props.id}
        className={props.classes}
        ref={toolbarRef}
      >
        {/* Slide out drawer */}
        <MuiDrawer
          variant="temporary"
          onClose={handleDrawerToggle}
          open={drawerOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {
            <MuiList>
              {props.routes.map((route) => (
                <NavListLink {...route} key={route.route}></NavListLink>
              ))}
            </MuiList>
          }
        </MuiDrawer>

        <LeftWrapper ref={leftWrapperRef}>
          {/* Nav Drawer Button */}
          <MuiIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: drawerMenuIconDisplayed ? 'inherit' : 'none',
            }}
          >
            <MuiMenuIcon />
          </MuiIconButton>

          {/* Left Aligned Items */}
          {renderContentsWithAlignment('left')}

          {/* Route Menu Items */}
          {props.routes.map((d) => (
            <StyledMenuItem
              key={d.route}
              component={Link}
              to={d.route}
              selected={location.pathname === d.route}
              sx={{ display: drawerMenuIconDisplayed ? 'none' : 'inherit' }}
            >
              <MuiTypography textAlign="center">{d.name}</MuiTypography>
            </StyledMenuItem>
          ))}
        </LeftWrapper>

        <RightWrapper ref={rightWrapperRef}>
          {/* Right Aligned Items */}
          {renderContentsWithAlignment('right')}
        </RightWrapper>
      </MuiToolbar>
    </>
  );
};

NavBar.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  contents: PropTypes.array.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  pendoMetadata: PropTypes.object.isRequired,
};

export default NavBar;
