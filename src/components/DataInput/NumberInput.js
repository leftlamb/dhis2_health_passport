import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    FormControl, 
    InputLabel, 
    Input, 
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    
}));

export const NumberInput = (props)=> {
    const classes = useStyles()

    return(
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name">{props.name}</InputLabel>
            <Input type="number" id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
    )
}