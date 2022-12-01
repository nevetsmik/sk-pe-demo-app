import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import MuiCircularProgress from '@mui/material/CircularProgress';
import DownloadIcon from '@mui/icons-material/Download';

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

  function downloadAction() {
    console.log("I'm downloading");
  }

  function openModal(title, state) {
    console.log(title);
  }

  return (
    <List
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
        <div key={article.id}>
          <ListItem
            style={{ padding: '0px 10px 0px 10px' }}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={downloadAction()}
              >
                <DownloadIcon />
              </IconButton>
            }
          >
            <ListItemText
              style={{ fontSize: '12px' }}
              primary={
                <Typography
                  type="body1"
                  style={{
                    fontWeight: '500',
                    color: '#000048',
                    fontSize: '14px',
                  }}
                >
                  <a
                    href="/"
                    onClick={(event) => {
                      event.preventDefault();
                      openModal(article.title, true);
                    }}
                    style={{ textDecoration: 'none' }}
                  >
                    {article.title}
                  </a>
                </Typography>
              }
              secondary={
                <div style={{ width: '90%', margin: '0px' }}>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {article.date} | {article.author} <br />
                    {article.summary}
                  </Typography>
                </div>
              }
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

ListResults.propTypes = {
  dataUrl: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default ListResults;
