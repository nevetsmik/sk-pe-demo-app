import React from 'react';

import MuiGrid from '@mui/material/Grid';

import ContentTile from './ContentTile';

const supportedComponents = {
  Grid: MuiGrid,
  ContentTile: ContentTile,
};
let globalTileStyles;

export function renderPageContent(content, tileStyles) {
  globalTileStyles = globalTileStyles || tileStyles;
  console.log(globalTileStyles);

  return content.map((d, i) => {
    if (d.componentName) {
      let Component = supportedComponents[d.componentName];

      console.log(
        `Rendering item ${d.key || i}. name: ${d.componentName}, opts: `,
        d.componentName === 'ContentTile'
          ? { ...globalTileStyles, ...d.opts }
          : d.opts
      );

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
