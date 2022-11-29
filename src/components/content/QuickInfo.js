import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

import getDimensions from '../../common/getDimensions';

const baseUrl = '/crm/tableData/';

const QuickInfo = (props) => {
  // Resize handler for container
  const [containerRef, containerDim] = getDimensions();

  // Resize handler for text items
  const [imageRef, imageDim] = getDimensions();

  // Resize handler for text items
  const [textRef, textDim] = getDimensions();

  // Get quick info from relevant table
  const { detailType, detailId } = useParams();
  const [fields, setFields] = React.useState({});

  React.useEffect(() => {
    if (detailId === 'new') {
      setFields(JSON.parse(window.localStorage.getItem('_acmeNewDetails')));
    } else {
      fetch(`${baseUrl}${detailType}.json`)
        .then((response) => response.json())
        .then((data) => {
          const entry = data.rows.filter((d) => d.id === detailId)[0];

          const details = {};
          for (const key of Object.values(data.quickInfoSchema)) {
            details[key] = entry[key];
          }
          setFields(details);
        })
        .catch((error) => {
          console.log(
            `Unable to fetch details for detailType: ${detailType} and detailId: ${detailId}`,
            error
          );
        });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height:
          props.height -
          props.card_content_vert_padding -
          containerDim.padding.vert,
        width: '100%',
      }}
    >
      <MuiBox
        ref={imageRef}
        sx={{
          display: 'flex',
          paddingBottom: '16px',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://www.acmecrm.io/static/media/hex_logo.ec9f114f.png"
          style={{
            maxHeight: `${
              containerDim.innerHeight -
              imageDim.padding.vert -
              imageDim.margin.vert -
              textDim.outerHeight
            }px`,
            maxWidth: '80%',
          }}
        ></img>
      </MuiBox>
      <MuiBox ref={textRef}>
        {Object.entries(fields).map(([key, val]) => {
          return (
            <MuiBox
              key={key}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <MuiTypography sx={{ fontWeight: 'bold' }}>{key}:</MuiTypography>
              <MuiTypography sx={{ paddingLeft: '20px' }}>{val}</MuiTypography>
            </MuiBox>
          );
        })}
      </MuiBox>
    </div>
  );
};

QuickInfo.propTypes = {
  height: PropTypes.number.isRequired,
  card_content_vert_padding: PropTypes.number.isRequired,
};

export default QuickInfo;
