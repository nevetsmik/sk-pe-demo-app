import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

const baseUrl = '/crm/tableData/';

const QuickInfo = (props) => {
  // const { detailType, detailId } = useParams();
  // Get padding to determine height
  const ref = React.useRef(null);
  const [padding, setPadding] = React.useState(0);
  const [sidePadding, setSidePadding] = React.useState(0);

  React.useEffect(() => {
    const parentStyles = getComputedStyle(ref.current.parentElement);
    const paddingTop = parseInt(parentStyles.paddingTop.slice(0, -2));
    const paddingBottom = parseInt(parentStyles.paddingBottom.slice(0, -2));
    setPadding(paddingTop + paddingBottom);

    const paddingLeft = parseInt(parentStyles.paddingLeft.slice(0, -2));
    const paddingRight = parseInt(parentStyles.paddingRight.slice(0, -2));
    setSidePadding(paddingLeft + paddingRight);
  });

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
    <div ref={ref} style={{ height: props.height - padding, width: '100%' }}>
      <MuiBox
        sx={{
          justifyContent: 'center',
          padding: '20px 25%',
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      >
        <img
          src="https://www.acmecrm.io/static/media/hex_logo.ec9f114f.png"
          style={{
            width: '100%',
            maxWidth: '200px',
          }}
        ></img>
      </MuiBox>
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
    </div>
  );
};

QuickInfo.propTypes = {
  height: PropTypes.number.isRequired,
};

export default QuickInfo;
