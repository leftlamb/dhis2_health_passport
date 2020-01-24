import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const Patient = (props) => {
    let history = useHistory()

    useEffect(()=>{
        console.log(props)
        if(props.patient.name==="") {
            history.push('/')
        }
    }, [])

    return (
        <>
            {props.patient.name}
        </>
    )
}

