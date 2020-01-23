import React from 'react'
import './card.css'

export const Card = (props) => (
    <div className="card">
        {props.name}
        <img src={props.img} alt={props.name} className="image"/>
    </div>
)
