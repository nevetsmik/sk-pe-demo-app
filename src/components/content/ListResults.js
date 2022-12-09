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
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import getDimensions from '../../common/getDimensions';
import Modal from '../../common/modals/Modal';
import { Download } from '@mui/icons-material';

const ListResults = (props) => {
  // Resize handler for container
  const [containerRef, containerDim] = getDimensions();

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

  // Handle download button click
  function downloadAction(title, link) {
    // Send download initiated track event
    pendo.track('Download Initiated', {
      title: title,
      link: link,
    });

    // Randomly determine if fail or success
    if (Math.random() < 0.75) {
      pendo.track('Download Succeeded', {
        title: title,
        link: link,
      });

      handleSnackbarOpen('success', 'Download succeeded!');
    } else {
      pendo.track('Download Failed', {
        title: title,
        link: link,
      });

      handleSnackbarOpen('error', 'Download failed. Please try again later.');
    }
  }

  // Handle modal state
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = (article) => {
    // Call optional open start callback
    if (props.openStartCallback) {
      props.openStartCallback();
    }

    setSrc(article.link);
    setTitle(article.title);
    setModalOpen(true);

    // Call optional open end callback
    if (props.openEndCallback) {
      props.openEndCallback();
    }
  };
  const handleModalClose = () => {
    // Call optional open start callback
    if (props.closeStartCallback) {
      props.closeStartCallback();
    }

    setModalOpen(false);

    // Call optional open end callback
    if (props.closeEndCallback) {
      props.closeEndCallback();
    }
  };

  // Handle snackbar state
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [alertSeverity, setAlertSeverity] = React.useState('success');
  const [alertMessage, setAlertMessage] = React.useState('Download succeeded!');
  const handleSnackbarOpen = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setSnackbarOpen(true);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Handle current src and title state
  const [src, setSrc] = React.useState('');
  const [title, setTitle] = React.useState('');

  // Download button (used in list item and in modal header)
  const DownloadButton = (
    <MuiIconButton
      edge="end"
      aria-label="download"
      onClick={(article) => {
        downloadAction(article.title, article.link);
      }}
      sx={{
        backgroundColor: '#1DA259',
        '&:hover': {
          backgroundColor: '#1a9150',
        },
        color: 'white',
        ...props.buttonStyles,
      }}
    >
      <MuiDownloadIcon />
    </MuiIconButton>
  );

  const availableHeight =
    props.height - props.card_content_vert_padding - containerDim.padding.vert;

  return (
    <>
      <Modal
        open={modalOpen}
        handleClose={handleModalClose}
        header={{
          ...props.modal.header,
          name: title,
          button: DownloadButton,
        }}
        content={{ ...props.modal.content, src: src, title: title }}
      ></Modal>
      <MuiSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={4000}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity={alertSeverity}
          elevation={6}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </MuiAlert>
      </MuiSnackbar>
      <MuiBox
        ref={containerRef}
        sx={{
          height: availableHeight,
          width: '100%',
        }}
      >
        <MuiList
          style={{
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
                secondaryAction={DownloadButton}
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
                          handleModalOpen(article);
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
      </MuiBox>
    </>
  );
};

ListResults.propTypes = {
  height: PropTypes.number.isRequired,
  card_content_vert_padding: PropTypes.number.isRequired,
  dataUrl: PropTypes.string.isRequired,
  modal: PropTypes.object.isRequired,
  openStartCallback: PropTypes.func,
  openEndCallback: PropTypes.func,
  closeStartCallback: PropTypes.func,
  closeEndCallback: PropTypes.func,
  buttonStyles: PropTypes.object,
};

export default ListResults;
