import React from "react";
import PropTypes from "prop-types";
import "./Tag.scss";

export function Tag({ label }) {
  return <button className="tag">{label}</button>;
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};
