import React from 'react';
import PropTypes from 'prop-types';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line as ChartJSLine } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Line = (props) => {
  return <ChartJSLine data={props.data} options={props.options}></ChartJSLine>;
};

Line.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};

export default Line;
