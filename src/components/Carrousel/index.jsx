import React, { useState } from 'react';
import './Carrousel.scss';

export function Caroussel({ images }) {
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

    return (
        <div className="caroussel">
            <button className="caroussel__arrow caroussel__arrow--left" onClick={handlePrev}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="caroussel__images">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button className="caroussel__arrow caroussel__arrow--right" onClick={handleNext}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="caroussel__count">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}