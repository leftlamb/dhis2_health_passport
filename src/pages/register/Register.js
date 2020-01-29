import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
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

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './register.css'


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export const Register = (props) => {
    const classes = useStyles();
    let history = useHistory()

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [sex, setSex] = useState("female")
    const [maritalStatus, setMaritalStatus] = useState('')
    const [alcohol, setAlcohol] = useState(false)
    const [tobacco, setTobacco] = useState(false)
    const [bloodGroup, setBloodGroup] = useState('')

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <div className="registerContainer">
            <button className="backButton" onClick={()=>history.push('/')}>Back</button>
            <span className="headerText">
                Register new patient
            </span>
            <form className="registerForm">
                <div className="registerGeneral">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <RadioGroup aria-label="gender" name="gender1" value={sex} onChange={()=>setSex(event.target.value)} row>
                            <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female" />
                            <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male" />
                        </RadioGroup>
                        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="village">Village</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="contactNumber">Contact Number</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="pob">Place of Birth</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="religion">Religion</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="occupation">Occupation</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={maritalStatus}
                            onChange={(event)=>setMaritalStatus(event.target.value)}
                        >
                            <MenuItem value={1}>Single</MenuItem>
                            <MenuItem value={2}>Married</MenuItem>
                            <MenuItem value={3}>Widowed</MenuItem>
                            <MenuItem value={4}>Divorced</MenuItem>
                            <MenuItem value={5}>Separated</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        {/* <InputLabel>Marital Status</InputLabel> */}
                        <FormControlLabel
                            control={<Checkbox checked={alcohol} color="primary" onChange={()=>setAlcohol(!alcohol)} value="alcohol" />}
                            label="Use of alcohol"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        {/* <InputLabel>Marital Status</InputLabel> */}
                        <FormControlLabel
                            control={<Checkbox checked={tobacco} color="primary" onChange={()=>setTobacco(!tobacco)} value="tobacco" />}
                            label="Use of Tobacco"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Blood group</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={bloodGroup}
                            onChange={(event)=>setBloodGroup(event.target.value)}
                        >
                            <MenuItem value={1}>O</MenuItem>
                            <MenuItem value={2}>A</MenuItem>
                            <MenuItem value={3}>B</MenuItem>
                            <MenuItem value={4}>AB</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="occupation">Occupation</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="occupation">Occupation</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="occupation">Occupation</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    {/* <FormControl>
                        <InputLabel htmlFor="name">Date</InputLabel>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl> */}

                </div>
            </form>
        </div>
    )
}    

