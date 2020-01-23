import React from 'react'
import './personButton.css'

export const PersonButton = (props) => (
    <div className="button">
            <span className="name">{props.name}</span>
        <div className="personalInfo">
            <span className="dob">Place Of Birth: {props.pob}</span>
            <span className="contactNumber">Tlf: {props.contactNumber}</span>
        </div>
    </div>
)
