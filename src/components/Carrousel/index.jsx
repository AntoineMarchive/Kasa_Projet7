import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Carrousel.scss";

export function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
const hasMultipleImages = images.length > 1;

  return (
    <div className="carrousel">
      {hasMultipleImages && (
      <button
        className="carrousel__arrow carrousel__arrow--left"
        onClick={handlePrev}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      )}
      <div className="carrousel__images">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {hasMultipleImages &&(
      <button
        className="carrousel__arrow carrousel__arrow--right"
        onClick={handleNext}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      )}
      {hasMultipleImages && (
      <div className="carrousel__count">
        {currentIndex + 1} / {images.length}
      </div>
      )}
    </div>
  );
}

Carrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
