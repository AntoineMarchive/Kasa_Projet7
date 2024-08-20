import React from "react";
import "./Thumb.scss";


export function Thumb({ cover, title }) {
  return (
    <li className="thumb">
      <img className="thumb__image" src={cover} alt={cover} ></img>
      <h2 className="thumb__title"> {title}</h2>
    </li>
  );
}
