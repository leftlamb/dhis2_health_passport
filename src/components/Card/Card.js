import React from 'react'

import './card.css'

export const Card = (props) => {
    return (
        <div className={props.small?"card smallCard":"card bigCard"} onClick={()=>props.site && props.history.push(props.site)}>
            <span className="cardDescription">
                {props.name}
            </span>
            {props.image && <img src={props.img} alt={props.name} className="image"/>}
        </div>
    )
}
