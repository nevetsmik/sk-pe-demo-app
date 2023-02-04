import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import {
  Home,
  PeopleAlt,
  AssignmentInd,
  RequestPage,
  PhoneIphone,
  AddCircle,
  ContactSupport,
  CalendarToday,
  CheckBox,
  Build,
  Phone,
  Email,
  NoteAlt,
} from '@mui/icons-material';

const DynamicIcon = (props) => {
  // Assign icon based on prop
  //   Currently, material ui does not support lazy loading icons,
  //   so manually loading only the required icons here is the best option
  let Icon;
  switch (props.icon) {
    case 'Home':
      Icon = Home;
      break;
    case 'PeopleAlt':
      Icon = PeopleAlt;
      break;
    case 'AssignmentInd':
      Icon = AssignmentInd;
      break;
    case 'RequestPage':
      Icon = RequestPage;
      break;
    case 'PhoneIphone':
      Icon = PhoneIphone;
      break;
    case 'AddCircle':
      Icon = AddCircle;
      break;
    case 'ContactSupport':
      Icon = ContactSupport;
      break;
    case 'CalendarToday':
      Icon = CalendarToday;
      break;
    case 'CheckBox':
      Icon = CheckBox;
      break;
    case 'Build':
      Icon = Build;
      break;
    case 'Phone':
      Icon = Phone;
      break;
    case 'Email':
      Icon = Email;
      break;
    case 'NoteAlt':
      Icon = NoteAlt;
      break;
    default:
      Icon = Home;
      break;
  }

  return (
    <>
      <Icon sx={{ ...props.styles }}></Icon>
    </>
  );
};

DynamicIcon.propTypes = {
  styles: PropTypes.object,
  icon: PropTypes.string.isRequired,
};

export default DynamicIcon;
