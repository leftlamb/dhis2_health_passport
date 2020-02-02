import React, {useState, useEffect} from 'react';

import './display.css'

export const DataDisplay = (props)=> {
    const [value, setValue] = useState()

    useEffect(()=>{
        setValue(props.value)
        if(props.valueType==='BOOLEAN' || props.valueType==='TRUE_ONLY') {
            setValue(props.value?'Yes':'No')
        }
    }, [])

    return(
        <span className="displayContainer">
            <b>{props.name}</b>: {value===''?<span className="undefined">Not recieved</span>:value}
        </span>
    )
}
