import React from 'react';
import PropTypes from 'prop-types';

import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemText from '@mui/material/ListItemText';
import MuiBox from '@mui/material/Box';
import MuiIconButton from '@mui/material/IconButton';
import MuiTypography from '@mui/material/Typography';
import MuiDivider from '@mui/material/Divider';
import MuiDownloadIcon from '@mui/icons-material/Download';
import MuiLink from '@mui/material/Link';

import Modal from '../../common/modals/Modal';

const ListResults = (props) => {
  // Get padding to determine height
  const ref = React.useRef(null);
  const [padding, setPadding] = React.useState(0);

  React.useEffect(() => {
    const parentStyles = getComputedStyle(ref.current.parentElement);
    const paddingTop = parseInt(parentStyles.paddingTop.slice(0, -2));
    const paddingBottom = parseInt(parentStyles.paddingBottom.slice(0, -2));
    setPadding(paddingTop + paddingBottom);
  });

  // Fetch table data
  const [articleData, setArticleData] = React.useState([]);

  React.useEffect(() => {
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
    console.log('Downloading track event here');
  }

  // Handle modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = (article) => {
    // Call optional open start callback
    if (props.openStartCallback) {
      props.openStartCallback();
    }

    setSrc(article.link);
    setTitle(article.title);
    setOpen(true);

    // Call optional open end callback
    if (props.openEndCallback) {
      props.openEndCallback();
    }
  };
  const handleClose = () => {
    // Call optional open start callback
    if (props.closeStartCallback) {
      props.closeStartCallback();
    }

    setOpen(false);

    // Call optional open end callback
    if (props.closeEndCallback) {
      props.closeEndCallback();
    }
  };

  // Handle current src and title state
  const [src, setSrc] = React.useState('');
  const [title, setTitle] = React.useState('');

  return (
    <>
      <Modal
        open={open}
        handleClose={handleClose}
        header={{ ...props.modal.header, name: title }}
        content={{ ...props.modal.content, src: src, title: title }}
      ></Modal>
      <MuiList
        ref={ref}
        style={{
          height: props.height - padding,
          width: '100%',
          maxHeight: '100%',
          margin: '0px',
          paddingTop: '0px',
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
                  onClick={() => {
                    downloadAction(article.title, article.link);
                  }}
                  style={{ ...props.buttonStyles }}
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
                      sx={{
                        cursor: 'pointer',
                      }}
                      className="link"
                      onClick={(event) => {
                        event.preventDefault();
                        handleOpen(article);
                      }}
                      style={{
                        textDecoration: 'none',
                        color: ' #000080',
                        fontSize: '16px',
                      }}
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
                    <MuiBox style={{ width: '85%', margin: '0px' }}>
                      <MuiBox
                        className="article-author"
                        style={{ fontWeight: '500' }}
                      >
                        {article.author}
                      </MuiBox>
                      <MuiBox className="article-date">{article.date}</MuiBox>
                      <MuiBox className="article-summary">
                        {article.summary}
                      </MuiBox>
                    </MuiBox>
                  </MuiTypography>
                }
              />
            </MuiListItem>
            <MuiDivider />
          </MuiBox>
        ))}
      </MuiList>
    </>
  );
};

ListResults.propTypes = {
  height: PropTypes.number.isRequired,
  dataUrl: PropTypes.string.isRequired,
  modal: PropTypes.object.isRequired,
  openStartCallback: PropTypes.func,
  openEndCallback: PropTypes.func,
  closeStartCallback: PropTypes.func,
  closeEndCallback: PropTypes.func,
  buttonStyles: PropTypes.object,
};

export default ListResults;
