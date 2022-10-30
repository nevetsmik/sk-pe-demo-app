import React from 'react';
import PropTypes from 'prop-types';

import MuiCard from '@mui/material/Card';
import MuiCardHeader from '@mui/material/CardHeader';
import MuiDivider from '@mui/material/Divider';
import MuiCardContent from '@mui/material/CardContent';

import Chart from './Chart';
import Table from './Table';

// Create object of supported content types to be rendered in tile
const supportedComponents = {
  Chart: Chart,
  Table: Table,
};

const ContentTile = (props) => {
  const cardRef = React.useRef(null);
  const headerRef = React.useRef(null);

  const [cardHeight, setCardHeight] = React.useState(0);
  const [headerHeight, setHeaderHeight] = React.useState(0);

  const handleElementResized = () => {
    if (cardRef.current.offsetHeight !== cardHeight) {
      setCardHeight(cardRef.current.offsetHeight);
    }
    if (headerRef.current.offsetHeight !== headerHeight) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  const resizeObserver = new ResizeObserver(handleElementResized);

  React.useEffect(() => {
    resizeObserver.observe(cardRef.current);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  });

  // Merge global styles with styles specified as props
  const styles = {
    margin: '8px',
    ...props.sx,
  };

  // Select content component based on type
  const Content = supportedComponents[props.type];

  return (
    <MuiCard ref={cardRef} sx={styles}>
      <MuiCardHeader ref={headerRef} title={props.header}></MuiCardHeader>
      <MuiDivider />
      <MuiCardContent>
        <Content height={cardHeight - headerHeight} {...props.opts}></Content>
      </MuiCardContent>
    </MuiCard>
  );
};

ContentTile.propTypes = {
  header: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  opts: PropTypes.object.isRequired,
  sx: PropTypes.object,
};

export default ContentTile;
