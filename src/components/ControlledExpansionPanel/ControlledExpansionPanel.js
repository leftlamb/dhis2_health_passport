import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {GeneralInformation, Visits, FamilyHistory, ImmunicationRecord, MedicalSurgicalHistory, FamilyPlanning} from './expansions'

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
      flexDirection: 'column',
      '& span': {
          margin: '4px 0'
      },
  },
  undefined: {
      color: '#f00',
  },
  }));

export const ControlledExpansionPanel = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
		<GeneralInformation classes={classes} patient={props.patient}/>
		<MedicalSurgicalHistory classes={classes} patient={props.patient}/>
		<FamilyHistory classes={classes} patient={props.patient}/>
		<ImmunicationRecord classes={classes} patient={props.patient}/>
		{props.patient.sex === 'F' && <FamilyPlanning classes={classes} patient={props.patient}/>}
		<Visits classes={classes} patient={props.patient}/>
    </div>
  );
}
