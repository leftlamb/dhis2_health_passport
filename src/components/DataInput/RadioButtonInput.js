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
    radio: {
        color: '#666',
    }
}));

export const RadioButtonInput = (props)=> {
    const classes = useStyles()
    const [value, setValue] = useState(null)

    return(
        <FormControl className={`${classes.formControl} ${classes.radio}`}>
        <span>{props.name}</span>
            <RadioGroup value={value} onChange={()=>setValue(event.target.value)} row>
                <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Yes" />
                <FormControlLabel value="no" control={<Radio color="primary"/>} label="No" />
            </RadioGroup>
        </FormControl>
    )
}