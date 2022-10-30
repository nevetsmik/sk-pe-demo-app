import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MuiCircularProgress from '@mui/material/CircularProgress';

import { DataGrid } from '@mui/x-data-grid';

const Table = (props) => {
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
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(props.dataUrl)
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
      })
      .catch((error) =>
        console.error(`Failed to load data from ${props.dataUrl}`)
      );
  }, []);

  return (
    <div ref={ref} style={{ height: props.height - padding, width: '100%' }}>
      {tableData.length ? (
        <DataGrid
          rows={tableData}
          columns={props.columns}
          autoPageSize={true}
        />
      ) : (
        <MuiCircularProgress />
      )}
    </div>
  );
};

Table.propTypes = {
  dataUrl: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ),
  height: PropTypes.number.isRequired,
};

export default Table;
