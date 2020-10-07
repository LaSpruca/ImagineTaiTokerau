import React from "react";

export const Card = (props) => (
  <div className={"card-bg"}>
    <img src={props.imageLocation} alt={props.alt} />
    <h3>{props.title}</h3>
    <p>{props.children}</p>
  </div>
);

export const CardBorderless = (props) => (
  <div className={"card-nobg"}>
    <img src={process.env.PUBLIC_URL + props.imageLocation} alt={props.alt} />
    <h3>{props.title}</h3>
    <p>{props.children}</p>
  </div>
);
