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

import getDimensions from '../../common/getDimensions';
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
  // Resize handler for container
  const [containerRef, containerDim] = getDimensions();

  <MuiTimelineConnector />;
  return (
    <div
      ref={containerRef}
      style={{
        height:
          props.height -
          containerDim.padding.vert -
          props.card_content_vert_padding,
        width: '100%',
      }}
    >
      <MuiTimeline sx={{ margin: '0px', padding: '0px' }}>
        {entries.map((d, i) => {
          return (
            <MuiTimelineItem
              key={`${i}-${d.text}`}
              sx={{
                minHeight: '10px',
                height: `${
                  (props.height -
                    containerDim.padding.vert -
                    props.card_content_vert_padding) /
                  entries.length
                }px`,
              }}
            >
              <MuiTimelineOppositeContent
                sx={{ flex: 0, padding: '0px' }}
              ></MuiTimelineOppositeContent>
              <MuiTimelineSeparator>
                <MuiTimelineConnector sx={{ opacity: i === 0 ? 0 : 1 }} />
                <MuiTimelineDot sx={{ margin: '0px', padding: '2px' }}>
                  <DynamicIcon
                    icon={d.icon}
                    styles={{
                      height: `${
                        0.5 *
                        ((props.height -
                          containerDim.padding.vert -
                          props.card_content_vert_padding) /
                          entries.length)
                      }px`,
                    }}
                  ></DynamicIcon>
                </MuiTimelineDot>
                <MuiTimelineConnector
                  sx={{ opacity: i === entries.length - 1 ? 0 : 1 }}
                />
              </MuiTimelineSeparator>
              <MuiTimelineContent sx={{ maxWidth: '100%' }}>
                <MuiTypography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    '-webkit-line-clamp': '1',
                    '-webkit-box-orient': 'vertical',
                  }}
                >
                  {d.text}
                </MuiTypography>
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
  card_content_vert_padding: PropTypes.number.isRequired,
};

export default Timeline;
