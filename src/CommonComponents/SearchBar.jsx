import SearchIcon from '@material-ui/icons/Search';
import { InputBase, makeStyles } from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles((theme) => ({
    search: {
      display: 'flex',
      margin: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.background.default,
    },
    searchIcon: {
      padding: theme.spacing(1),
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
        width: '100%',
        paddingRight: theme.spacing(1),
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
    },
}));

export const SearchBar = () => {
    const classes = useStyles();
    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
};