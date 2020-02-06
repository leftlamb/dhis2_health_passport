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

// import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import {GeneralInformation} from '../../components/ControlledExpansionPanel/expansions'
import {ActivePatients} from '../../components'

import '../register/register.css'
import './programs.css'

// import {} 

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    sex: {
        color: '#666',
        paddingTop: 14,
    }
}))

const dataElements = [
    {
        // id: "qR2egL2KtTM",
        dataElement: {
            name: "Name",
            // id: "Vk1tzSQxvOR",
            valueType: "TEXT",
            optionSetValue: false,
        }
    },
    {
        // id: "qR2egL2KtTM",
        dataElement: {
            name: "Gender",
            // id: "Vk1tzSQxvOR",
            valueType: "TEXT",
            optionSetValue: true,
            optionSet: {
                name: "Gender",
                // id: "isYOcVDBgJo",
                options: [
                    {
                        name: "Male",
                        id: "SGnpWzOu1Bq"
                    },
                    {
                        name: "Female",
                        id: "iNZU6alTXAP"
                    },
                ]
            }
        }
    },
    {
        // id: "qR2egL2KtTM",
        dataElement: {
            name: "Wives",
            // id: "Vk1tzSQxvOR",
            valueType: "NUMBER",
            optionSetValue: false,
        }
    },
    {
        // id: "qR2egL2KtTM",
        dataElement: {
            name: "Use of alcohol",
            // id: "Vk1tzSQxvOR",
            valueType: "TRUE_ONLY",
            optionSetValue: false,
        }
    },
    {
        // id: "qR2egL2KtTM",
        dataElement: {
            name: "Use of tobacco",
            // id: "Vk1tzSQxvOR",
            valueType: "BOOLEAN",
            optionSetValue: false,
        }
    },
]

const valueTypes = ['TEXT', 'TRUE_ONLY', 'FILE_RESOURCE', 'BOOLEAN', 'INTEGER_POSITIVE', 'NUMBER', 'DATE', 'LONG_TEXT', 'INTEGER', 'INTEGER_ZERO_OR_POSITIVE']
const otherNeededTypes = ['PERCENTAGE', 'DATE_TIME', 'UNIT_INTERVAL', 'PHONE_NUMBER', 'LETTER']

import {TextInput, NumberInput, OptionSetInput, RadioButtonInput} from '../../components/DataInput'

export const ARTForm = (props) => {
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
    console.log(dataElements)

    return (
        <div className="registerContainer">
            <button className="backButton" onClick={()=>history.push('/')}>Back</button>
            <span className="headerText">
                ART form
            </span>
            <div className="activePatient">
                {props.patient.name!==""?
                <GeneralInformation patient={props.patient}/>
                :
                <ActivePatients setPatient={(data)=>props.setPatient(data)} open/>
                }
            </div>
            <form className="registerForm">
                <div className="registerGeneral">
                    {dataElements.map((dataElement, key) => {
                        if(dataElement.dataElement.optionSetValue) {
                            return <OptionSetInput name={dataElement.dataElement.name} options={dataElement.dataElement.optionSet.options}/>
                        } else {
                            if(dataElement.dataElement.valueType==="TEXT")
                                return <TextInput key={key} name={dataElement.dataElement.name}/>
                            else if(dataElement.dataElement.valueType==="NUMBER")
                                return <NumberInput key={key} name={dataElement.dataElement.name}/>
                            else if(dataElement.dataElement.valueType==="TRUE_ONLY" || dataElement.dataElement.valueType==="BOOLEAN")
                                return <RadioButtonInput key={key} name={dataElement.dataElement.name} />
                        }
                    })}
                </div>
            </form>
        </div>
    )
}    

