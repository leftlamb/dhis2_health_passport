import React from 'react'
import './card.css'

export const Card = (props) => (
    <div className="card" onClick={()=>props.history.push(props.site)}>
        <span className="cardDescription">
            {props.name}
        </span>
        <img src={props.img} alt={props.name} className="image"/>
    </div>
)
