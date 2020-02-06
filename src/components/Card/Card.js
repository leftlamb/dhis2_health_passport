import React from 'react'

import './card.css'

export const Card = (props) => {

    const handleClick = () => {
        if(props.onClick) {
            props.onClick()
        } 
        else props.site && props.history.push(props.site)
    }

    return (
        <div className={props.small?"card smallCard":"card bigCard"} onClick={()=>handleClick()}>
            <span className="cardDescription">
                {props.name}
            </span>
            {props.image && <img src={props.img} alt={props.name} className="image"/>}
        </div>
    )
}
