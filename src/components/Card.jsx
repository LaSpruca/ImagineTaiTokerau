import React from 'react';

export function Card(props) {
    return (
        <div className={"card-bg"}>
            <img src={props.imageLocation} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export function CardBorderless(props) {
    return (
        <div className={"card-nobg"}>
            <img src={process.env.PUBLIC_URL + props.imageLocation} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </div>
    )
}

