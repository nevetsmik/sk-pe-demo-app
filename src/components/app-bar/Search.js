import React from 'react';
import PropTypes from 'prop-types';

import MuiInputBase from '@mui/material/InputBase';
import MuiIconButton from '@mui/material/IconButton';
import MuiSearchIcon from '@mui/icons-material/Search';
import { styled as muiStyled, alpha as muiAlpha } from '@mui/material/styles';

const Search = (props) => {
  // Search bar contents
  const SearchBar = muiStyled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: muiAlpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: muiAlpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
  }));

  const StyledInputBase = muiStyled(MuiInputBase)(({ theme }) => ({
    color: 'inherit',
    padding: theme.spacing(0, 1, 0, 1),
    width: 'calc(100% - 40px)',
  }));

  return (
    <SearchBar>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <MuiIconButton color="inherit">
        <MuiSearchIcon />
      </MuiIconButton>
    </SearchBar>
  );
};

Search.propTypes = {};

export default Search;
