import React from "react";
import "./Thumb.scss";


export function Thumb({ image, title }) {
  return (
    <li className="thumb">
      <img className="thumb__image" src={image} alt="" ></img>
      <h2 className="thumb__title"> {title}</h2>
    </li>
  );
}
