import React from 'react';
import PropTypes from 'prop-types';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiCssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme as muiCreateTheme,
} from '@mui/material/styles';

import Header from './components/header/Header';
import PageContent from './components/content/PageContent';
import Footer from './components/footer/Footer';

const App = (props) => {
  // Global theme provider
  const theme = muiCreateTheme({
    typography: {
      fontFamily: ['"Sora"', 'sans-serif'].join(','),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
            body {
            }
          `,
      },
    },
  });

  // Pendo metadata state handler
  const [pendoMetadata, setPendoMetadata] = React.useState({});

  // Resize handler for header
  const headerRef = React.useRef(null);

  const [headerHeight, setHeaderHeight] = React.useState(0);

  const handleHeaderResized = () => {
    if (headerRef.current.offsetHeight !== headerHeight) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  const headerObserver = new ResizeObserver(handleHeaderResized);

  React.useEffect(() => {
    headerObserver.observe(headerRef.current);

    return function cleanup() {
      headerObserver.disconnect();
    };
  });

  // Resize handler for footer
  const footerRef = React.useRef(null);

  const [footerHeight, setFooterHeight] = React.useState(0);

  const handleFooterResized = () => {
    if (footerRef.current.offsetHeight !== footerHeight) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  };

  const footerObserver = new ResizeObserver(handleFooterResized);

  React.useEffect(() => {
    footerObserver.observe(footerRef.current);

    return function cleanup() {
      footerObserver.disconnect();
    };
  });

  // Ref for content container to get margin + padding values
  const contentContainerRef = React.useRef(null);

  const getContainerOffset = (contentContainerEl) => {
    if (contentContainerEl) {
      const computedStyle = window.getComputedStyle(contentContainerEl);
      return (
        parseInt(computedStyle.marginTop, 10) +
        parseInt(computedStyle.marginBottom, 10) +
        parseInt(computedStyle.paddingTop, 10) +
        parseInt(computedStyle.paddingBottom, 10)
      );
    } else {
      return 0;
    }
  };

  // Fetch metadata, install and initialize Pendo
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlDisablePendo = urlParams.get('disablePendo') === 'true';
    const urlApiKey = urlParams.get('apiKey');
    const urlVisitor = urlParams.get('visitor') || '';
    const urlAccount = urlParams.get('account') || '';
    const urlAccountBasedVisitor = urlParams.get('accountBasedVisitor') || '';
    const urlRole = urlParams.get('role') || '';
    const urlTeam = urlParams.get('team') || '';
    const urlTitle = urlParams.get('title') || '';
    const urlQuotaAttainment = urlParams.get('quotaAttainment') || '';
    const urlRegion = urlParams.get('region') || '';
    const urlOffice = urlParams.get('office') || '';
    const urlSystem = urlParams.get('system') || '';

    fetch(
      `/visitorApi/visitors/new?visitor=${urlVisitor}&account=${urlAccount}&accountBasedVisitor=${urlAccountBasedVisitor}&role=${urlRole}&team=${urlTeam}&title=${urlTitle}&quotaAttainment=${urlQuotaAttainment}&region=${urlRegion}&office=${urlOffice}&system=${urlSystem}`
    )
      .then((res) => res.json())
      .then((visInfo) => {
        setPendoMetadata(visInfo);
        initPendo(visInfo);
      })
      .catch((error) => {
        console.log('Failed to load visitor metadata:', error);
        console.log('Using default metadata');

        const visInfo = {
          visitor: {
            id: 'ryan@test.com',
            role: 'user',
            team: 'Product',
            title: 'Product Manager',
            region: 'AMER',
            office: 'Raleigh',
            system: 'Mac',
            quotaBasedRole: false,
            quotaAttainment: 0,
          },
          account: { id: 'test' },
        };

        setPendoMetadata(visInfo);
        initPendo(visInfo);
      });

    function initPendo(visInfo) {
      visInfo.visitor.acmeVersion = 3;
      if (!urlDisablePendo) {
        pendo.initialize({
          additionalApiKeys: urlApiKey
            ? []
            : [
                '758434d6-672f-4326-4db4-64412a4af191', // Pendo Experience Sandbox
                'bada3d2f-3371-418a-6711-c9ed5af6d466', // Pendo - Onboarding
                '9a491f59-cc46-43e2-4c67-179d36c5d03b', // Pendo Free Sample Data (US prod)
                'b2cb409b-391e-4505-71ef-f35a6ba59b9f', // (Demo) Digital Adaoption - SFDC
                'aafdb96f-d3f0-4704-59a1-912a146e228c', // sr$2A - d44B! (Custom Demo Sub)
              ],
          visitor: visInfo.visitor,
          account: visInfo.account,
        });
      }
    }
  }, []);

  // Create router based on drawer links
  const router = createBrowserRouter(
    props.content.routes.map((d) => ({
      path: d.route,
      element: (
        <MuiThemeProvider theme={theme}>
          <MuiBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              fontFamily: 'Sora',
              backgroundColor: '#ebecee',
              ...props.styles,
            }}
            {...props.opts}
            id={props.id}
            className={props.classes}
          >
            {/* Background Image */}
            {props.background ? (
              <MuiBox
                sx={{
                  width: '100%',
                  minHeight: '100vh',
                  position: 'absolute',
                  zIndex: '1',
                  ...props.background.styles,
                }}
              ></MuiBox>
            ) : (
              ''
            )}
            {/* Global CSS Styles */}
            <MuiCssBaseline />
            {/* Header */}
            <Header
              {...props.header}
              innerRef={headerRef}
              routes={props.content.routes}
              pendoMetadata={pendoMetadata}
            ></Header>
            {/* Content */}
            <MuiBox
              sx={{
                display: 'flex',
                backgroundColor: '#f7f8fa',
                borderRadius: '5px',
                padding: { xs: '10px', sm: '20px', md: '40px' },
                marginLeft: { xs: '10px', sm: '20px', md: '40px' },
                marginRight: { xs: '10px', sm: '20px', md: '40px' },
                zIndex: '2',
                ...props.content.styles,
              }}
              {...props.content.opts}
              id={props.content.id}
              className={props.content.classes}
              ref={contentContainerRef}
            >
              <PageContent
                contents={d.contents}
                headerHeight={headerHeight}
                footerHeight={footerHeight}
                containerOffset={getContainerOffset(
                  contentContainerRef.current
                )}
              ></PageContent>
            </MuiBox>
            {/* Footer */}
            <Footer innerRef={footerRef} {...props.footer}></Footer>
          </MuiBox>
        </MuiThemeProvider>
      ),
    }))
  );

  return <RouterProvider router={router} />;
};

App.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  background: PropTypes.shape({
    styles: PropTypes.object,
    opts: PropTypes.object,
    id: PropTypes.string,
    classes: PropTypes.string,
  }),
  header: PropTypes.object.isRequired,
  content: PropTypes.shape({
    styles: PropTypes.object,
    opts: PropTypes.object,
    id: PropTypes.string,
    classes: PropTypes.string,
    routes: PropTypes.array.isRequired,
  }).isRequired,
  footer: PropTypes.object.isRequired,
};

export default App;
