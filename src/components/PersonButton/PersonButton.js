import React from 'react'
import './personButton.css'

export const PersonButton = (props) => {
    const selectPatient = () => {
        props.setPatient({
            name: props.name,
            pob: props.pob,
            contactNumber: props.contactNumber,
            id: '12354564567'
        })
        props.history.push('/patient')
    }
    return(
        <button className="button" onClick={()=>selectPatient()}>
                <span className="name">{props.name}</span>
            <div className="personalInfo">
                <span className="dob">Place Of Birth: {props.pob}</span>
                <span className="contactNumber">Tlf: {props.contactNumber}</span>
            </div>
        </button>
    )
}
