import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const GeneralInformation = (props) => {
    const classes = props.classes
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
                <span><b>Name</b>: {props.patient.name}</span>
                <span><b>Sex</b>: {props.patient.sex === "M"?"Male":"Female"}</span>
                <span><b>Marital Status</b>: {props.patient.maritalStatus === "M"?"Male":"Female"}</span>
                <span><b>National ID</b>: {props.patient.id===""? <span className={classes.undefined}>Not recieved</span>:props.patient.id }</span>
                <span><b>Date of birth</b>: {props.patient.dob===""? <span className={classes.undefined}>Not recieved</span>:props.patient.dob }</span>
                <span><b>Contact Number</b>: {props.patient.contactNumber===""? <span className={classes.undefined}>Not recieved</span>:props.patient.contactNumber }</span>
                <span><b>Village</b>: {props.patient.village===""? <span className={classes.undefined}>Not recieved</span>:props.patient.village }</span>
                <span><b>Occupation</b>: {props.patient.occupation===""? <span className={classes.undefined}>Not recieved</span>:props.patient.occupuation }</span>
                <span><b>Religion</b>: {props.patient.religion===""? <span className={classes.undefined}>Not recieved</span>:props.patient.religion }</span>
                <span><b>Blood group</b>: {props.patient.religion===""? <span className={classes.undefined}>Not recieved</span>:props.patient.religion }</span>
                <span><b>Allergies</b>: {props.patient.allergies.length<1? <span className={classes.undefined}>No known allergies</span>:props.patient.allergies }</span>
                <span><b>Use of Alcohol</b>: {props.patient.useOfAlcohol?'Yes':'No'}</span>
                <span><b>Use of Tobacco</b>: {props.patient.useOfTobacco?'Yes':'No'}</span>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}