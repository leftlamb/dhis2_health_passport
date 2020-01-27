import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

import './patient.css'

export const Patient = (props) => {
    let history = useHistory()
    const [isEnrolled, setEnrolled] = useState(false)

    useEffect(()=>{
        if(props.patient.name==="") {
            history.push('/')
        }
    }, [])

    return (
        <div className="patientContainer">
            <button className="backButton" onClick={()=>history.push('/')}>Back</button>
            <span className="patientName">
                {props.patient.name}
            </span>
            <div className="buttonContainer">
                <button>Start Visit</button>
                <button disabled={!isEnrolled}>Continue Visit</button>
            </div>
            <div className="informationContainer">
                
            </div>
        </div>
    )
}

