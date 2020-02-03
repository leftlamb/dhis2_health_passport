import React, {useState, useEffect} from 'react';

import './display.css'

export const DataDisplay = (props)=> {
    const [value, setValue] = useState()

    useEffect(()=>{
        setValue(props.value)
        if(props.valueType==='BOOLEAN' || props.valueType==='TRUE_ONLY' || typeof props.value === "boolean") {
            setValue(props.value?'Yes':'No')
        }
        if(Array.isArray(props.value)) {
            let listItems = []
            props.value.map((element, key)=>{
                listItems.push(<span key={key} className="listElement">{element}</span>)
            })
            setValue(listItems)
        }
    }, [])

    return(
        <span className="displayContainer">
            <b>{props.name}</b>: {value===''?<span className="undefined">Not recieved</span>:value}
        </span>
    )
}
