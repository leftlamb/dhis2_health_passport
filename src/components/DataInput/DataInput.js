import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    FormControl, 
    InputLabel, 
    Input, 
    FormHelperText, 
    RadioGroup, 
    FormControlLabel, 
    Radio,
    FormLabel,
    Select,
    MenuItem,
    Checkbox,
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

import './dataInput.css'

valueTypes = ['TEXT', 'TRUE_ONLY', 'FILE_RESOURCE', 'BOOLEAN', 'INTEGER_POSITIVE', 'NUMBER', 'DATE', 'LONG_TEXT', 'INTEGER', 'INTEGER_ZERO_OR_POSITIVE', ]
otherNeededTypes = ['PERCENTAGE', 'DATE_TIME', 'UNIT_INTERVAL', 'PHONE_NUMBER', 'LETTER']

export const DisplayData = (props)=> {
    // const [option, setOption] = useState()

    useEffect(()=>{
        if(props.optionSetValue) {
            props.optionSet.forEach(element => {

            });
        }
    }, [])

    return(
        <span className="displayContainer">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </span>
    )
}