import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

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
                <button>Start Visit</button>
                <button disabled={!isEnrolled}>Continue Visit</button>
            </div>
            <div className="informationContainer">

            </div>
        </div>
    )
}

