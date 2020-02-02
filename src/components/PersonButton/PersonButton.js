import React from 'react'
import './personButton.css'


export const PersonButton = (props) => {
    const selectPatient = () => {
        console.log(props.patient)
        props.setPatient(props.patient)
        props.history.push('/patient')
    }
    return(
        <button className="button" onClick={()=>selectPatient()}>
                <span className="name">{props.patient.name}</span>
            <div className="personalInfo">
                <span className="dob">Place Of Birth: {props.patient.pob}</span>
                <span className="contactNumber">Tlf: {props.patient.contactNumber}</span>
            </div>
        </button>
    )
}
