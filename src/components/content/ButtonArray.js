import React from 'react';
import PropTypes from 'prop-types';

import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemText from '@mui/material/ListItemText';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiDivider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';

import getDimensions from '../../common/getDimensions';
import Modal from '../../common/modals/Modal';
import ButtonModal from '../../common/buttons/ButtonModal';

const ButtonArray = (props) => {
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

  // Handle current src and title state
  const [src, setSrc] = React.useState('');
  const [title, setTitle] = React.useState('');

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
          button: (
            <ButtonModal
              title={title}
              src={src}
              srcComponent={'Article Viewer'}
            ></ButtonModal>
          ),
        }}
        content={{ ...props.modal.content, src: src, title: title }}
      ></Modal>
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
                style={{ padding: '0px 0px 0px 10px' }}
                secondaryAction={
                  <ButtonModal
                    title={article.title}
                    src={article.link}
                    srcComponent={'Article List'}
                    buttonStyles={{
                      ...props.buttonStyles,
                    }}
                  ></ButtonModal>
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
                          handleModalOpen(article);
                        }}
                        style={{
                          textDecoration: 'none',
                          color: ' #000080',
                          fontSize: '14px',
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
                          style={{ fontWeight: '500', fontSize: '12px' }}
                        >
                          {article.author}
                        </MuiBox>
                        <MuiBox
                          className="article-date"
                          style={{ fontSize: '12px' }}
                        >
                          {article.date}
                        </MuiBox>
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

ButtonArray.propTypes = {
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

export default ButtonArray;
