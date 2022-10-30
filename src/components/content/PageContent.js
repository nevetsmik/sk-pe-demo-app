import React from 'react';
import PropTypes from 'prop-types';

import MuiGrid from '@mui/material/Grid';

import ContentTile from './ContentTile';

const supportedComponents = {
  Grid: MuiGrid,
  ContentTile: ContentTile,
};

const PageContent = (props) => {
  function renderPageContent(content) {
    return content.map((d, i) => {
      if (d.componentName) {
        let Component = supportedComponents[d.componentName];

        d.opts.sx = { ...d.opts.sx, ...props.styles[d.componentName] };

        return (
          <Component key={d.key || i} {...d.opts}>
            {d.contents ? renderPageContent(d.contents) : ''}
          </Component>
        );
      } else {
        return (
          <p key={i}>
            No Content Set in Page Config. Please update /src/common/Config.js
          </p>
        );
      }
    });
  }

  return renderPageContent(props.content);
};

PageContent.propTypes = {
  content: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired,
};

export default PageContent;
