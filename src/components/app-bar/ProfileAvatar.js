import React from 'react';
import PropTypes from 'prop-types';

import MuiIconButton from '@mui/material/IconButton';
import MuiAvatar from '@mui/material/Avatar';
import MuiPersonIcon from '@mui/icons-material/Person';
import Popover from '@mui/material/Popover';

const ProfileAvatar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const UserInfoTable = (
    <table className="user-info-table">
      <tbody>
        <tr>
          <td>Visitor:</td>
          <td style={{ width: '10px' }}></td>
          <td>
            {/* {props?.visInfo?.visitor?.id?.includes('@')
              ? props?.visInfo?.visitor?.id?.slice(
                  0,
                  props?.visInfo?.visitor?.id?.indexOf('@')
                )
              : props?.visInfo?.visitor?.id} */}
            Visitor
          </td>
        </tr>
        {/* <tr>
          <td>Account:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.account?.id}</td>
        </tr>
        <tr>
          <td>Role:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.role}</td>
        </tr>
        <tr>
          <td>Team:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.team}</td>
        </tr>
        <tr>
          <td>Title:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.title}</td>
        </tr>
        <tr>
          <td>Region:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.region}</td>
        </tr>
        <tr>
          <td>Office:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.office}</td>
        </tr>
        <tr>
          <td>System:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.system}</td>
        </tr> */}
      </tbody>
    </table>
  );

  return (
    <>
      <MuiIconButton onClick={handleClick}>
        <MuiAvatar>
          <MuiPersonIcon></MuiPersonIcon>
        </MuiAvatar>
      </MuiIconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <table className="user-info-table">
          <tbody>
            <tr>
              <td>Visitor:</td>
              <td style={{ width: '10px' }}></td>
              <td>
                {/* {props?.visInfo?.visitor?.id?.includes('@')
              ? props?.visInfo?.visitor?.id?.slice(
                  0,
                  props?.visInfo?.visitor?.id?.indexOf('@')
                )
              : props?.visInfo?.visitor?.id} */}
                Visitor
              </td>
            </tr>
            {/* <tr>
          <td>Account:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.account?.id}</td>
        </tr>
        <tr>
          <td>Role:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.role}</td>
        </tr>
        <tr>
          <td>Team:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.team}</td>
        </tr>
        <tr>
          <td>Title:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.title}</td>
        </tr>
        <tr>
          <td>Region:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.region}</td>
        </tr>
        <tr>
          <td>Office:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.office}</td>
        </tr>
        <tr>
          <td>System:</td>
          <td style={{ width: '10px' }}></td>
          <td>{props?.visInfo?.visitor?.system}</td>
        </tr> */}
          </tbody>
        </table>
      </Popover>
    </>
  );
};

ProfileAvatar.propTypes = {
  visInfo: PropTypes.object,
};

export default ProfileAvatar;
