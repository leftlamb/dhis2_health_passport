import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {DataDisplay} from '../../DataDisplay'

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    details: {
        display: 'flex',
        '& div': {
            display: 'flex',
            flexDirection: 'column'
        },
        '& span': {
            margin: '4px 0'
        },
},
  undefined: {
      color: '#f00',
  },
}));

export const GeneralInformation = (props) => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    return (
        <ExpansionPanel expanded={expanded} onChange={()=>setExpanded(!expanded)}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>General Information</Typography>
                {/* <Typography className={classes.secondaryHeading}>General Information for {props.patient.name}</Typography> */}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
                <div>
                    <DataDisplay name="Name" value={props.patient.name}/>
                    <DataDisplay name="Gender" value={props.patient.sex}/>
                    <DataDisplay name="Marital Status" value={props.patient.maritalStatus}/>
                    <DataDisplay name="Date of Birth" value={props.patient.dob}/>
                    <DataDisplay name="Village" value={props.patient.village}/>
                    <DataDisplay name="Contact Number" value={props.patient.contactNumber}/>
                    <DataDisplay name="Occupation" value={props.patient.occupation}/>
                    <DataDisplay name="Religion" value={props.patient.religion}/>
                    <DataDisplay name="Blood Group" value={props.patient.bloodGroup}/>
                    <DataDisplay name="Allergies" value={props.patient.allergies}/>
                    <DataDisplay name="Use of Alcohol" value={props.patient.useOfAlcohol}/>
                    <DataDisplay name="Use of Tobacco" value={props.patient.useOfTobacco}/>
                </div>
                <div className="nextOfKin">

                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}