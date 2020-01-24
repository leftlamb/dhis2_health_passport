import React from 'react'
import './personButton.css'

import {
    Redirect
} from 'react-router-dom'

export const PersonButton = (props) => {
    return(
        <button className="button" onClick={()=>props.history.push('/patient')}>
                <span className="name">{props.name}</span>
            <div className="personalInfo">
                <span className="dob">Place Of Birth: {props.pob}</span>
                <span className="contactNumber">Tlf: {props.contactNumber}</span>
            </div>
        </button>
    )
    }
