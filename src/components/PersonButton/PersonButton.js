import React from 'react'
import './personButton.css'


export const PersonButton = (props) => {
    const selectPatient = () => {
        props.setPatient(props.patient)
        props.history.push('/patient')
    }
    return(
        <button className={props.patient.sex==="Male"?"button man":"button woman"} onClick={()=>selectPatient()}>
                <span className="name">{props.patient.name}</span>
            <div className="personalInfo">
                <span className="dob">Place Of Birth: {props.patient.pob}</span>
                <span className="contactNumber">Tlf: {props.patient.contactNumber}</span>
            </div>
        </button>
    )
}
