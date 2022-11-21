import React from 'react';
import PropTypes from 'prop-types';

import MuiTimeline from '@mui/lab/Timeline';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import MuiTimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import MuiTypography from '@mui/material/Typography';

import DynamicIcon from '../../common/DynamicIcon';

let entries = [
  {
    icon: 'NoteAlt',
    text: 'Waiting on approval from Jane (CEO) on SaaS approved vendor agreement, aiming for December 31, 2020 close date.',
  },
  {
    icon: 'Email',
    text: 'Sent follow up email to re-engage.',
  },
  {
    icon: 'Phone',
    text: 'Had a phone conversation discussing next steps.',
  },
  {
    icon: 'Build',
    text: 'Had a troubleshooting conversation with David, Sales Engineer. Resolved.',
  },
  {
    icon: 'CheckBox',
    text: 'Demo Complete.',
  },
  {
    icon: 'CalendarToday',
    text: 'Demo Scheduled November 15, 2020.',
  },
];

const Timeline = (props) => {
  console.log(props);
  // Get padding to determine height
  const ref = React.useRef(null);
  const [padding, setPadding] = React.useState(0);

  React.useEffect(() => {
    const parentStyles = getComputedStyle(ref.current.parentElement);
    const paddingTop = parseInt(parentStyles.paddingTop.slice(0, -2));
    const paddingBottom = parseInt(parentStyles.paddingBottom.slice(0, -2));
    setPadding(paddingTop + paddingBottom);
  });

  <MuiTimelineConnector />;
  return (
    <div ref={ref} style={{ height: props.height - padding, width: '100%' }}>
      <MuiTimeline sx={{ margin: '0px', padding: '0px' }}>
        {entries.map((d, i) => {
          return (
            <MuiTimelineItem
              key={`${i}-${d.text}`}
              sx={{
                minHeight: `${(props.height - padding) / entries.length}px`,
              }}
            >
              <MuiTimelineOppositeContent
                sx={{ flex: 0, padding: '0px' }}
              ></MuiTimelineOppositeContent>
              <MuiTimelineSeparator>
                <MuiTimelineConnector sx={{ opacity: i === 0 ? 0 : 1 }} />
                <MuiTimelineDot>
                  <DynamicIcon icon={d.icon}></DynamicIcon>
                </MuiTimelineDot>
                <MuiTimelineConnector
                  sx={{ opacity: i === entries.length - 1 ? 0 : 1 }}
                />
              </MuiTimelineSeparator>
              <MuiTimelineContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0px 16px',
                }}
              >
                <MuiTypography>{d.text}</MuiTypography>
              </MuiTimelineContent>
            </MuiTimelineItem>
          );
        })}
      </MuiTimeline>
    </div>
  );
};

Timeline.propTypes = {
  height: PropTypes.number.isRequired,
};

export default Timeline;
