import React from "react";
import PropTypes from "prop-types";
import "./Thumb.scss";

export function Thumb({ cover, title }) {
  return (
    <article className="thumb">
      <img className="thumb__image" src={cover} alt={title}></img>
      <h2 className="thumb__title"> {title}</h2>
    </article>
  );
}

Thumb.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
