import React, {useState} from 'react';

import {GeneralInformation, Visits, FamilyHistory, ImmunicationRecord, MedicalSurgicalHistory, FamilyPlanning} from './expansions'
import {useStyles} from './useStyles'

export const ControlledExpansionPanel = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
		<GeneralInformation classes={classes} patient={props.patient}/>
		<Visits classes={classes} patient={props.patient}/>
		<FamilyHistory classes={classes} patient={props.patient}/>
		<ImmunicationRecord classes={classes} patient={props.patient}/>
		<MedicalSurgicalHistory classes={classes} patient={props.patient}/>
		{props.patient.sex === 'F' && <FamilyPlanning classes={classes} patient={props.patient}/>}
    </div>
  );
}
