import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemText from '@mui/material/ListItemText';
import MuiBox from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import MuiTypography from '@mui/material/Typography';
import MuiDivider from '@mui/material/Divider';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MuiDownloadIcon from '@mui/icons-material/Download';
import MuiLink from '@mui/material/Link';

const ListResults = (props) => {
  // Get padding to determine height
  const ref = useRef(null);
  const [padding, setPadding] = useState(0);

  useEffect(() => {
    const parentStyles = getComputedStyle(ref.current.parentElement);
    const paddingTop = parseInt(parentStyles.paddingTop.slice(0, -2));
    const paddingBottom = parseInt(parentStyles.paddingBottom.slice(0, -2));
    setPadding(paddingTop + paddingBottom);
  });

  // Fetch table data
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch(props.dataUrl)
      .then((response) => response.json())
      .then((data) => {
        setArticleData(data);
      })
      .catch((error) =>
        console.error(`Failed to load data from ${props.dataUrl}`)
      );
  }, []);

  function downloadAction(title, link) {
    openModal(title, link);
    console.log('Downloading track event here');
  }

  function openModal(title, link) {
    console.log(title, link);
    // Show Modal w/ Embed, title=title, link = embed link from json
  }

  return (
    <MuiList
      ref={ref}
      style={{
        height: props.height - padding,
        width: '100%',
        maxHeight: '100%',
        margin: '0px',
      }}
      className="article-list"
    >
      {articleData.map((article) => (
        <MuiBox key={article.id}>
          <MuiListItem
            style={{ padding: '0px 10px 0px 10px' }}
            secondaryAction={
              <MuiIconButton
                edge="end"
                aria-label="download"
                onClick={downloadAction(article.title, article.link)}
              >
                <MuiDownloadIcon />
              </MuiIconButton>
            }
          >
            <MuiListItemText
              style={{ fontSize: '12px' }}
              primary={
                <MuiTypography
                  type="body1"
                  style={{
                    fontWeight: '500',
                    color: '#000048',
                    fontSize: '14px',
                  }}
                >
                  <MuiLink
                    className="link"
                    onClick={(event) => {
                      event.preventDefault();
                      openModal(article.title, article.link);
                    }}
                    style={{ textDecoration: 'none' }}
                  >
                    {article.title}
                  </MuiLink>
                </MuiTypography>
              }
              secondary={
                <MuiTypography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <MuiBox style={{ width: '90%', margin: '0px' }}>
                    {article.date} | {article.author} <br />
                    {article.summary}
                  </MuiBox>
                </MuiTypography>
              }
            />
          </MuiListItem>
          <MuiDivider />
        </MuiBox>
      ))}
    </MuiList>
  );
};

ListResults.propTypes = {
  dataUrl: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default ListResults;
