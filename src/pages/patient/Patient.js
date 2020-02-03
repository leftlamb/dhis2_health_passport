import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {PersonButton, ControlledExpansionPanel} from '../../components'
import {ContinueVisitDialog} from './ContinueVisitDialog'
import {EnrollPatientButton} from './EnrollPatientButton'

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
                <EnrollPatientButton isEnrolled={isEnrolled} setEnrolled={(enroll)=>setEnrolled(enroll)}/>
                <ContinueVisitDialog disabled={!isEnrolled}/>
            </div>
            <div className="informationContainer">
                <ControlledExpansionPanel
                    patient={props.patient}
                />
            </div>
        </div>
    )
}

