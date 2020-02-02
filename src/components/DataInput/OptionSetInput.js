import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    FormControl, 
    InputLabel, 
    Select,
    MenuItem,
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

// "optionSet": {
//     "name": "TB Disease Classification",
//     "id": "isYOcVDBgJo",
//     "options": [
//         {
//             "name": "P+",
//             "id": "SGnpWzOu1Bq"
//         },
//         {
//             "name": "P-",
//             "id": "iNZU6alTXAP"
//         },
//         {
//             "name": "PE",
//             "id": "gJht1tUXhv2"
//         }
//     ]
// }

export const OptionSetInput = (props)=> {
    const classes = useStyles()
    const [value, setValue] = useState(null)
    
    useEffect(()=>{
        console.log(props)
    })
    return(
        <FormControl className={classes.formControl}>
            <InputLabel>{props.name}</InputLabel>
            <Select
                value={value}
                onChange={(event)=>setValue(event.target.value)}
            >   
                {props.options.map((element, key)=>{
                    return <MenuItem key={key} value={element.name}>{element.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}